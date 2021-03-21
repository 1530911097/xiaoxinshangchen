<template>
	<div>
		<swiper class="detail-sweiper" >
			<template #swiper>
			<swiper-item class="swiper-item" v-for="(item,index) in topImages" :key="index">
				 <img :src="item" alt="">
				 	</swiper-item>
			</template>
		</swiper>
	</div>
</template>

<script>
	import Swiper from '../../../components/common/swiper/Swiper.vue'
	import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
	export default{
		name:'DetailSwiper',
		props:{
			topImages:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			SwiperItem,
			Swiper
		}
	}
</script>

<style scoped>
	.detail-sweiper{
	height: 300px;
	overflow: hidden;
	}
</style>
