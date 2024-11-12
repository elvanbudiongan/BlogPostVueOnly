<script setup lang="ts">
	import { computed } from 'vue'
	import { useBlogPostStore } from '@/stores/blogStore'
	import { useRoute, useRouter } from 'vue-router'

	const blogStore = useBlogPostStore()
	const route = useRoute()
	const router = useRouter()

	const post = computed(() => blogStore.getPostById(Number(route.params.id)))

	function deletePost(){
		if(post.value){
			blogStore.deletePost(post.value.id)
			router.push('/')
		}
	}
</script>

<template>
  <div v-if="post">
    <h1>Title: {{ post.title }}</h1>
    <p>Content: {{ post.content }}</p>
    <router-link :to="{ name: 'EditPost', params: { id: post.id } }">Edit</router-link>
    <button @click="deletePost">Delete Post</button>
    <router-link to="/">Back to List</router-link>
  </div>
  <p v-else>Post not found.</p>
</template>