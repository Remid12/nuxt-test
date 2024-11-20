interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const apiKey = config.apiKey;

    const data = await $fetch<ApiResponse>(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: apiKey,
          language: "fr-FR",
          region: "BE",
          "primary_release_date.gte": "2024-11-20",
          "primary_release_date.lte": "2024-11-20",
          sort_by: "popularity.desc",
          with_release_type: "2|3",
        },
      }
    );

    const filteredResults = data.results.filter(
      (movie) => movie.release_date === "2024-11-20"
    );

    console.log(filteredResults);

    return filteredResults;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch movies",
      data: error,
    });
  }
});
