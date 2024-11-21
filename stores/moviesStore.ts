// moviesStore.ts
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies-store", () => {
  const searchDates = ref<Array<string | Date>>(["2024-11-10", "2024-12-30"]);

  const getPopularMovies = async () => {
    return await $fetch("/api/popular");
  };

  const getRecentsMovies = async () => {
    return await $fetch("/api/discover", {
      params: {
        "release_date.gte": searchDates.value[0],
        "release_date.lte": searchDates.value[1],
        sort_by: "primary_release_date.desc",
        with_release_type: "2|3",
        language: "fr-FR",
        region: "BE",
      },
    });
  };

  const searchMovies = async (query: string) => {
    return await $fetch("/api/search", {
      params: {
        query,
      },
    });
  };

  const updateSearchDates = async (dates: Array<string | Date>) => {
    searchDates.value = dates;
  };

  return {
    getPopularMovies,
    getRecentsMovies,
    searchMovies,
    searchDates,
    updateSearchDates,
  };
});
