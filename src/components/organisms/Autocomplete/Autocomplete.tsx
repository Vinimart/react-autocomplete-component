import { ChangeEvent, memo, useCallback, useState } from 'react';

import { useAutocompleteContext } from '../../../contexts';
import { useCache, useDebounce } from '../../../hooks';
import { fetchMoviesData } from '../../../services';
import { Loader } from '../../atoms';
import { CardMovie, Input } from '../../molecules';
import style from './autocomplete.module.css';

import type { MoviesAPIResponse } from "../../../services/moviesApi";

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
  }, 500);

  const handleInputChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { value: search } = event.target;

      if (!search) {
        setIsLoading(false);
        return setSuggestions([]);
      }

      debouncedAPICall(search);
    },
    [debouncedAPICall, setIsLoading, setSuggestions]
  );

  return (
    <div className={style["autocomplete"]}>
      <div className={style["header"]}>
        <Input
          value={inputValue}
          icon={<i className="fa-solid fa-magnifying-glass" />}
          onChange={handleInputChange}
        />
      </div>

      <div className={`${style["content"]} ${isLoading && style["loading"]}`}>
        <div
          className={`${style["loader-wrapper"]} ${
            !isLoading && style["hidden"]
          }`}
        >
          <Loader isLoading={isLoading} />
        </div>
        {suggestions?.map(({ imdbID, Title, Type, Year, Poster }) => (
          <CardMovie
            key={imdbID}
            id={imdbID}
            title={Title}
            type={Type}
            year={Year}
            poster={Poster}
          />
        ))}
        tle
      </div>
    </div>
  );
}

export default memo(Autocomplete);
