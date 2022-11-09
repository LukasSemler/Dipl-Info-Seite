<script setup>
import { RouterView } from 'vue-router';
import CompNavBar from './components/CompNavBar.vue';
</script>

<template>
  <div >
    <div class="sticky top-0 left-0 right-0 z-10">
      <CompNavBar class="mb-2 bg-white"></CompNavBar>
    </div>
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style></style>
