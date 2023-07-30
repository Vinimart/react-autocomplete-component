interface ApiResponse {
  elapse: number;
  results: MovieData[];
}

interface MovieData {
  avgrating: number;
  clist: string;
  id: number;
  imdbid: string;
  imdbrating: number;
  img: string;
  nfid: number;
  poster: string;
  runtime: number;
  synopsis: string;
  title: string;
  titledate: string;
  top250: number;
  top250tv: number;
  vtype: string;
  year: number;
}

export const fetchMoviesData = async (query?: string): Promise<ApiResponse> => {
  const defQuery = `start_year=1972&orderby=rating&audiosubtitle_andor=and&limit=100&subtitle=english&countrylist=78%2C46&audio=english&country_andorunique=unique&offset=0&end_year=2019`;
  const url = `https://unogsng.p.rapidapi.com/search?${query ?? defQuery}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY as string,
      "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data as ApiResponse;
  } catch (error) {
    console.error("Error fetching movies data:", error);
    return { elapse: 0, results: [] };
  }
};
