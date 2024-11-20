<script setup lang="ts"></script>

<template>
  <header class="mb-10 pb-4 border-b border-white">
    <nav class="flex gap-4 items-center">
      <NuxtLink to="/" style="margin-right: 10px">home</NuxtLink>
      <NuxtLink to="/movies">movies</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
}
</style>
