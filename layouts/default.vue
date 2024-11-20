<script setup lang="ts">
import AppHeader from "./default/header.vue";
import AppFooter from "./default/footer.vue";
</script>

<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>

<style scoped></style>
