<template>
	<div class="cart-list">
		<scroll  ref='scroll'>
		<template #scroll>
	    <CartListltem class="cart-list-item" v-for="item in cartList" :product="item"></CartListltem>
		</template>
		</scroll>  
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	import  Scroll from '../../../components/common/scroll/Scroll.vue'
	import  CartListltem from './CartListltem.vue'
	export default{
		name:'CartList',
		components:{
			Scroll,
			CartListltem
		},
		data(){
			return {
				item:[]
			}
		},
		activated() {
			this.$refs.scroll.refresh()
		},
		computed:{
			...mapGetters(['cartLength','cartList'])
		},
		methods:{
			
		}
		/* mounted:{
			this.$refs.scroll.scroll.refresh()
		}, */
	}
</script>

<style scoped>
	.cart-list{
		padding-top: 35px;
		height: 100%;
	}
 .wrapper{
	height: calc(100vh - 87px);


 }
</style>
