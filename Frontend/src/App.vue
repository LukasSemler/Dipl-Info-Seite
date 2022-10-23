<script setup>
import { RouterView } from 'vue-router';
import CompNavBar from './components/CompNavBar.vue';
</script>

<template>
  <CompNavBar></CompNavBar>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style></style>
