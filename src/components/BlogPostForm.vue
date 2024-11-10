<script setup lang="ts">
import { ref } from 'vue'
import { useBlogPostStore } from '@/stores/blogStore'

const blogStore = useBlogPostStore()
const title = ref('')
const content = ref('')

function handleSubmit() {
  if (title.value && content.value) {
    blogStore.addPost(title.value, content.value)
    title.value = ''
    content.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="inputTitle">Title</label>
    <input type="text" id="inputTitle" v-model="title" required />
    <label for="inputContent">Content</label>
    <textarea id="inputContent" v-modle="content" required></textarea>
  </form>
</template>

<style scoped></style>
