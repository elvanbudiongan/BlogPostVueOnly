import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface BlogPost {
  title: string
  content: string
  id: number
}

export const useBlogPostStore = defineStore('blog', () => {
  const posts = ref<BlogPost[]>([])
  const nextId = ref(1)

  function addPost(title: string, content: string) {
    posts.value.push({ title, content, id: nextId.value++ })
  }

  function deletePost(id: number) {
    posts.value = posts.value.filter((post) => post.id !== id)
  }

  function getPostById(id: number): BlogPost | undefined {
    return posts.value.find((post) => post.id == id)
  }

  function editPost(id: number, updateTitle: string, updateContent: string) {
    const post = posts.value.find((post) => post.id == id)
    if (post) {
      post.title = updateTitle
      post.content = updateContent
    }
  }

  return { posts, addPost, deletePost, getPostById, editPost }
})
