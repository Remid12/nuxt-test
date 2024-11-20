<script setup>
const props = defineProps({
  search: {
    type: String,
    required: false,
  },
  isSearch: {
    type: Boolean,
    required: true,
  },
});

const movies = ref([]);
const moviesStore = useMoviesStore();
const hasError = ref(false);

// Fonction générique pour récupérer les films
const fetchMovies = async () => {
  try {
    let response;

    if (props.isSearch) {
      if (!props.search || props.search.length < 3) {
        movies.value = [];
        return;
      }
      response = await moviesStore.searchMovies(props.search);
    } else {
      response = await moviesStore.getRecentsMovies();
    }

    console.log(response)

    if (response.error) {
      hasError.value = true;
      movies.value = [];
    } else {
      hasError.value = false;
      movies.value = props.isSearch ? response.data.results : response.data;
    }
  } catch (err) {
    hasError.value = true;
    console.error(err);
  }
};

// Rechercher les films à chaque changement de `props.search` ou `props.isSearch`
watch([() => props.search, () => props.isSearch], fetchMovies, {
  immediate: true,
});
</script>

<template>
  <div>
    <div v-if="hasError" class="error-message">Une erreur est survenue.</div>
    <ul
      class="l-movies grid grid-cols-12 gap-4"
      v-else-if="movies && movies.length > 0"
    >
      <li v-for="movie in movies" :key="movie.id" class="col-span-3">
        <MovieCard :movie="movie" />
      </li>
    </ul>
    <div v-else>Aucun résultat.</div>
  </div>
</template>
