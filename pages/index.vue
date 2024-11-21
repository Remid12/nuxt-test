<script setup lang="ts">
const moviesStore = useMoviesStore();
const dates = ref([new Date("2024-11-01"), new Date("2024-11-30")]);

moviesStore.updateSearchDates(dates.value);

const test = () => {
  moviesStore.updateSearchDates(dates.value);
};
</script>

<template>
  <h1 class="mb-0">Recents theater releases</h1>

  <DatePicker
    v-model="dates"
    class="my-6"
    selectionMode="range"
    @date-select="test"
  />

  <MovieList :isSearch="false" />
</template>

<style scoped></style>
