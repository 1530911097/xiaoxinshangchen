<template>
	<div id="home-swiper">
		<swiper>
		<template #swiper> 
		<swiper-item v-for="(item,index) in banners" :key="index">
		<a :href="item.link">
			<img :src="item.image" @load="imgLoad1" />
		</a>
		  </swiper-item>
		</template>
	</swiper>
		</div>
</template>

<script>
	import {Swiper,SwiperItem} from '../../../components/common/swiper/index.js'
	export default{
		name:'HomeSwiper',
		props:{
			banners:{
			type:Array, 
			  dafault(){
			   return {};
			}
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			imgLoad1(){
				this.$emit('swiperImgLoad') /* 这里为了滑动能重新计算位置*/
			},
		}
	}
</script>

<style scoped>
	
</style>
