import { ChangeEvent, memo, useCallback, useState } from 'react';

import { useAutocompleteContext } from '../../../contexts';
import { useCache, useDebounce } from '../../../hooks';
import { fetchMoviesData } from '../../../services';
import { Loader } from '../../atoms';
import { CardMovie, Input } from '../../molecules';
import style from './autocomplete.module.css';

import type { MoviesAPIResponse } from "../../../services/moviesApi";

const DEBOUNCE_TIME_MS = 500;

function Autocomplete() {
  const [isLoading, setIsLoading] = useState(false);
  const { getFromCache, setToCache } = useCache<string[]>();

  const { inputValue, suggestions, setInputValue, setSuggestions } =
    useAutocompleteContext();

  const debouncedAPICall = useDebounce(async (search: string) => {
    setIsLoading(true);
    setInputValue(search);

    const cachedSuggestions = getFromCache(
      search
    ) as unknown as MoviesAPIResponse["Search"];

    if (cachedSuggestions) {
      setIsLoading(false);
      return setSuggestions(cachedSuggestions);
    }

    try {
      const { results } = await fetchMoviesData(search);

      setSuggestions(results);
      setToCache(search, results);
    } catch (error) {
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  }, DEBOUNCE_TIME_MS);

  const handleInputChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { value: search } = event.target;
      const trimmedSearch = search.trim();

      if (!trimmedSearch) {
        setIsLoading(false);
        return setSuggestions([]);
      }

      if (trimmedSearch?.length >= 3) debouncedAPICall(trimmedSearch);
    },
    [debouncedAPICall, setIsLoading, setSuggestions]
  );

  return (
    <div className={style["autocomplete"]} data-testid="autocomplete">
      <div className={style["header"]}>
        <Input
          value={inputValue}
          placeholder="Search for a movie or series"
          icon={<i className="fa-solid fa-magnifying-glass" />}
          onChange={handleInputChange}
        />
      </div>

      <div
        className={`${style["content"]} ${isLoading && style["loading"]} ${
          !inputValue && style["hidden"]
        }`}
      >
        <div
          className={`${style["loader-wrapper"]} ${
            !isLoading && style["hidden"]
          }`}
        >
          <Loader isLoading={isLoading} data-testid="loader" />
        </div>

        {suggestions?.map(({ imdbID, Title, Type, Year, Poster }) => (
          <CardMovie
            key={imdbID}
            id={imdbID}
            title={Title}
            type={Type}
            year={Year}
            poster={Poster}
            data-testid="card-movie"
          />
        ))}

        {inputValue && !suggestions?.length ? (
          <div className={style["empty"]} data-testid="empty">
            <i className="fa-solid fa-circle-info" />
            <h3 className={style["title"]}>No results found</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default memo(Autocomplete);
