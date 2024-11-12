import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import BlogDetailsView from '@/views/BlogDetailsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BlogList',
      component: HomeView,
    },
    {
      path: '/new',
      name: 'BlogPostView',
      component: BlogPostView,
    },
    {
      path: '/edit/:id',
      name: 'EditPost',
      component: BlogPostView,
      props: true
    },
    { 
      path: '/post/:id',
      name: 'BlogDetails', 
      component: BlogDetailsView, 
      props: true 
   },
  ],
})

export default router
