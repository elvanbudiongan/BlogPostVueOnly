<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/new">Create Post</router-link>
    </nav>
    <main>
       <router-view />
    </main>
 
</template>

<style scoped>


</style>
