<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useBlogPostStore } from '@/stores/blogStore'
import { useRoute, useRouter } from 'vue-router'

const blogStore = useBlogPostStore()
const route = useRoute()
const router = useRouter()

const isEditing = route.name === "EditPost"
const title = ref('')
const content = ref('')

onMounted(() =>{
  if(isEditing){
    const post = blogStore.getPostById(Number(route.params.id))
    if(post){
      title.value = post.title
      content.value = post.content
    }
  }
})

function handleSubmit() {
  if(isEditing){
    blogStore.editPost(Number(route.params.id), title.value, content.value)
  }else{
    blogStore.addPost(title.value, content.value)
  }
  router.push('/')
}
</script>

<template>
  <h1>{{ isEditing ? 'Edit Post' : 'Create New Post'}} </h1>
  <form @submit.prevent="handleSubmit">
    <label for="inputTitle">Title</label>
    <input type="text" id="inputTitle" v-model="title" required />
    <label for="inputContent">Content</label>
    <textarea id="inputContent" v-model="content" required></textarea>
    <button type="submit">{{ isEditing ? 'Save Changes' : 'Create Post' }}</button>
    <router-link to="/">Cancel</router-link>
  </form>

</template>

<style scoped></style>
