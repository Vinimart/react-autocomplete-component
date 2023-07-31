import { memo } from 'react';

import { useAutocompleteContext } from '../../../contexts';
import { imagePlaceholder } from '../../../utils';
import { Highligh } from '../../atoms';
import style from './card-movie.module.css';

export interface CardMovieProps {
  id: string;
  title: string;
  type: string;
  year: string;
  poster: string;
}

function CardMovie({ id, title, type, year, poster }: CardMovieProps) {
  const { inputValue } = useAutocompleteContext();

  return (
    <div className={style["card-movie"]} data-testid="card-movie">
      <div className={style["poster-wrapper"]}>
        <img
          className={style["poster"]}
          data-testid="poster"
          src={poster}
          alt={title}
          onErrorCapture={imagePlaceholder}
        />
      </div>

      <div className={style["info"]}>
        <h3 className={style["title"]} data-testid="title">
          <Highligh
            inputValue={inputValue}
            text={title}
          />
        </h3>

        <div>
          <span className={style["year"]}>{year} - </span>
          <span className={style["type"]}>{type}</span>
        </div>

        <a
          className={style["imdb"]}
          href={`https://www.imdb.com/title/${id}`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-imdb fa-lg" />
          <p>Discover on IMDb</p>
        </a>
      </div>
    </div>
  );
}

export default memo(CardMovie);
