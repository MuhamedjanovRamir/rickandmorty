import { createRouter, createMemoryHistory } from 'vue-router'
import routes from './routes' 

const router = createRouter({
  routes,
  history: createMemoryHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router
