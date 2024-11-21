export const useFetchMovies = async (
  endpoint: string,
  params: Record<string, any> = {}
) => {
  const config = useRuntimeConfig();

  try {
    const data = await $fetch(`https://api.themoviedb.org/3/${endpoint}`, {
      params: {
        api_key: config.apiKey,
        ...params,
      },
    });
    return { data, error: null };
  } catch (error) {
    console.error(`Error fetching movies from endpoint: ${endpoint}`, error);
    return { data: null, error };
  }
};
