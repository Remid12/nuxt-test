<script setup>
const prop = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Card class="h-full" v-if="movie">
    <template #header>
      <figure class="aspect-[3/5] bg-black">
        <img
          :alt="movie.title"
          :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </figure>
    </template>
    <template #title>
      {{ movie.title }}
    </template>
    <template #subtitle>
      <div class="flex gap-3 justify-between">
        <span v-if="movie.release_date">
          {{ useFormatDate(movie.release_date) }}
        </span>

        <span v-if="movie.vote_average.toFixed(1) > 0">
          {{ movie.vote_average.toFixed(1) }}&nbsp;/&nbsp;10
        </span>
      </div>
    </template>
    <template #content>
      <p class="h-[150px] overflow-y-auto mb-0">
        {{ movie.overview }}
      </p>
    </template>
  </Card>
</template>
