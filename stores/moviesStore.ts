const fetchApiData = async (url: string, options?: Record<string, any>) => {
  try {
    const data = await $fetch(url, options);

    return { data, error: null };
  } catch (err) {
    console.error(`Unexpected error fetching data from ${url}:`, err);
    return { data: null, error: err };
  }
};

export const useMoviesStore = defineStore("movies-store", () => {
  const getPopularMovies = async () => {
    return await fetchApiData("/api/popular", {
      method: "GET",
    });
  };

  const getRecentsMovies = async () => {
    return await fetchApiData("/api/discover", {
      method: "GET",
    });
  };

  const searchMovies = async (query: string) => {
    // Construire l'URL avec le paramètre de recherche
    const url = `/api/search?query=${encodeURIComponent(query)}`;

    // Appeler fetchApiData avec l'URL modifiée
    return await fetchApiData(url, {
      method: "GET",
    });
  };

  return {
    getPopularMovies,
    getRecentsMovies,
    searchMovies,
  };
});
