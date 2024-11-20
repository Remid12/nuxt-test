import { useFetchMovies } from "@/composables/useFetchMovies";

export default defineEventHandler(async () => {
  try {
    const data = await useFetchMovies("discover/movie", {
      "primary_release_date.gte": "2024-11-18",
      "primary_release_date.lte": "2024-11-22",
      sort_by: "popularity.desc",
      with_release_type: "2|3",
      language: "fr-FR",
      region: "BE",
    });

    if (data.error) {
      throw createError({
        statusCode: 500,
        message: "Failed to fetch movies",
        data: data.error,
      });
    }

    return data.data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch movies",
      data: error,
    });
  }
});
