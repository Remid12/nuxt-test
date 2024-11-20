// moviesStore.ts
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies-store", () => {
  const getPopularMovies = async () => {
    return await $fetch("/api/popular");
  };

  const getRecentsMovies = async () => {
    return await $fetch("/api/discover", {
      params: {
        "primary_release_date.gte": "2024-11-20",
        "primary_release_date.lte": "2024-11-20",
        sort_by: "popularity.desc",
        with_release_type: "2|3",
      },
    });
  };

  const searchMovies = async (query: string) => {
    return await $fetch("/api/search", {
      params: {
        query,
        language: "fr-FR",
      },
    });
  };

  return {
    getPopularMovies,
    getRecentsMovies,
    searchMovies,
  };
});
