<template> 
	<div id="main-tabbar">
	<tabbar>
		<tabbarltem path="/home" activeColor="deeppink">
			<template #top_top><img src="../../../assets/img/tabbar/home.svg" /></template>
			<template #top_center><img src="../../../assets/img/tabbar/home_active.svg" /></template>
			<template #top_z>首页</template>
		</tabbarltem>
		
	
			<tabbarltem path="/category" activeColor="deeppink">
			<template #top_top><img src="../../../assets/img/tabbar/category.svg" /></template>
			<template #top_center><img src="../../../assets/img/tabbar/category_active.svg" /></template>
			<template #top_z>分类</template>
		</tabbarltem>
		
		
			
			<tabbarltem path="/cart" activeColor="deeppink">
			<template #top_top><img src="../../../assets/img/tabbar/cart.svg" /></template>
			<template #top_center><img src="../../../assets/img/tabbar/cart_active.svg" /></template>
			<template #top_z>购物车</template>
		</tabbarltem>
		
		<tabbarltem  path="/profile" activeColor="deeppink">
			<template #top_top><img src="../../../assets/img/tabbar/profile.svg" /></template>
			<template #top_center><img src="../../../assets/img/tabbar/profile_active.svg" /></template>
			<template #top_z>我的</template>
		</tabbarltem>
		
	</tabbar>
	</div>
</template>

<script>
	import tabbar from '../../common/tabbar/Tabbar.vue'
	import tabbarltem from '../../common/tabbar/Tabbarltem.vue'
	export default{
		name:'mainTabbar',
		components:{
			tabbar,
			tabbarltem
		}
		
	}
</script>

<style scoped>
	
</style>/
