<script setup>
import { RouterView } from 'vue-router';
import Welcome from './components/Welcome.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="container">
      <div class="container-welcome"><Welcome /></div>
      <div class="container-header"><Header /></div>
      <div class="container-main"><RouterView /></div>
  </div>
</template>

<style>

</style>
