export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const apiKey = config.apiKey;
    const { query } = getQuery(event);

    if (!query) {
      throw createError({
        statusCode: 400,
        message: "Query parameter is required",
      });
    }

    // Appel à l'API externe avec le paramètre de recherche
    const data = await $fetch(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: apiKey,
        language: "fr-FR",
        query,
      },
    });

    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch movies",
      data: error,
    });
  }
});
