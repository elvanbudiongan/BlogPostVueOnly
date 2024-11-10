<script setup lang="ts">
	import { computed } from 'vue'
	import { useBlogPostStore } from '@/stores/blogStore'

	const blogStore = useBlogPostStore()
	const computed( () => blogStore.posts)
</script>


<template>
	<div>
		<h1>Blog Post</h1>
		<router-link to="/new" >Create New Post</router-link>
		<ul>
			<li v-for="post in posts" :key="post.id">
				<router-link :to="{ name: 'BlogDetails', params: { id: post.id }}" >
					<h2>{{ post.title }}</h2>
					<p>{{ post.content.substring(0, 100)}} ...</p>
				</router-link>
			</li>
		</ul>
	</div>
	
</template>