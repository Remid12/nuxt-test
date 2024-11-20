import { useFetchMovies } from '@/composables/useFetchMovies';

export default defineEventHandler(async () => {
  try {
    const data = await useFetchMovies('movie/popular', {
      language: "fr-FR",
    });

    if (data.error) {
      throw createError({
        statusCode: 500,
        message: "Failed to fetch popular movies",
        data: data.error,
      });
    }

    return data.data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch popular movies",
      data: error,
    });
  }
});