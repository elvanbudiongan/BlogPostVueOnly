<script setup lang="ts">
	import { computed, ref } from 'vue'
	import { useBlogPostStore } from '@/stores/blogStore'

	const blogStore = useBlogPostStore()
	const posts = blogStore.posts

	const POST_PER_PAGE = 10

	const currentPage = ref(1)

	const totalPages = computed(() => Math.ceil(posts.length/POST_PER_PAGE))

	const paginatedPost = computed( () => {
		const start = (currentPage.value - 1)*POST_PER_PAGE
		return posts.slice( start, start + POST_PER_PAGE)
	})

	function nextpage(){
		if(currentPage.value < totalPages.value){
			currentPage.value++
		}
	}

	function prevPage(){
		if(currentPage.value > 1){
			currentPage.value--
		}
	}
</script>


<template>
	<div>
		<h1>Blog Post</h1>
		<router-link to="/new" >Create New Post</router-link>
		<ul>
			<li v-for="post in paginatedPost" :key="post.id">
				<router-link :to="{ name: 'BlogDetails', params: { id: post.id }}" >
					<h2>Title: {{ post.title }}</h2>
					<p>content: {{ post.content.substring(0, 100)}} ...</p>
				</router-link>
			</li>
		</ul>
		<div class="pagination">
			<button @click="prevPage" :disabled="currentPage === 1">Previous</button>
			<span>Page {{ currentPage }} of {{totalPages}}</span>
			<button @click="nextpage" :disabled="currentPage === totalPages">Next</button>
		</div>
	</div>
	
</template>

<style scoped>
	ul{
		list-style: none;
	}
</style>