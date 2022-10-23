<script setup>
import { RouterView } from 'vue-router';
import CompNavBar from './components/CompNavBar.vue';
</script>

<template>
  <div class="mb-2"> <CompNavBar></CompNavBar></div>
 
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style></style>
