<template>
	<div id="cart">
	<navbar><template #center>
	<div>购物车({{cartLength}})</div></template></navbar>
	
	<cart-list></cart-list>
	<CartBottomBar></CartBottomBar>
   </div>
</template>

<script>
	
	import navbar from '../../components/common/navar/Navbar.vue'
	import cartList from './childCart/CartList.vue'
	import CartBottomBar from './childCart/CartBottomBar.vue'
	import {mapGetters} from 'vuex'
	export default {
		name: 'Cart',
		data(){
			return {
				scroll:null
			}
		},
		computed:{
			...mapGetters(['cartLength','cartList'])
		},
		
		components:{
			navbar ,
			CartBottomBar,
			cartList
		},

	}
</script>

<style scoped>
	.cart{
		padding-top: 44px;
	}


</style>
