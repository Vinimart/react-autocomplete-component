export interface MoviesAPIResponse {
  Search: Movie[];
  totalResults: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface FetchResponse {
  results: Movie[];
  total: number;
}

export const fetchMoviesData = async (
  query?: string,
): Promise<FetchResponse> => {
  const url = `https://movie-database-alternative.p.rapidapi.com/?s=${query}&r=json&page=1`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data: MoviesAPIResponse = await response.json();

    return {
      results: data?.Search,
      total: Number(data?.totalResults) || 0,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};
