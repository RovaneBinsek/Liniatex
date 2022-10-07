import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import WorkEquipment from '@/pages/WorkEquipment.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/work',
		name: 'About',
		component: WorkEquipment,
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
})
export default router