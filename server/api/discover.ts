import { useFetchMovies } from "@/composables/useFetchMovies";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);

    if (!query) {
      throw createError({
        statusCode: 400,
        message: "Query parameter is required",
      });
    }

    const data = await useFetchMovies("discover/movie", query);

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
