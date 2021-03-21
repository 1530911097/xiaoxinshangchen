import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Home =()=>import('../views/home/Home.vue')
const Cart =()=>import('../views/cart/Cart.vue')
const Category =()=>import('../views/category/Category.vue')
const Profile =()=>import('../views/profile/Profile.vue')
const Detail=()=>import ('../views/detail/Detail.vue')


export default new Router({
 routes:[
	{
		path: '/',
		redirect:'/home'
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	},
	{
		path: '/category',
		name: 'category',
		component: Category
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile
	},
	{
		path: '/detail/:iid',
		name: 'detail',
		component: Detail
	}
],
mode:'history'
})
/* 回调就就是钩子函数的意思 */
/* router.beforeEach(function(to,from,next){
	next()
	window.title=to.mate.title                //全局前置守卫，
})
router.afterEach((to,from,next)=>{            //全局后置守卫，
	console.log('.....')
}) */


