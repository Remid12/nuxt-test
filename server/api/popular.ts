export default defineEventHandler(async () => {
  try {
    const config = useRuntimeConfig();
    const apiKey = config.apiKey;

    // Utilisation de $fetch pour l'appel à l'API
    const data = await $fetch(`https://api.themoviedb.org/3/movie/popular`, {
      params: {
        api_key: apiKey,
      },
    });

    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch popular movies",
    });
  }
});
