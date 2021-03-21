<template>
	<div id="detail">
		<detail-navber ref="detailnavber" @itemClick="itemClick"></detail-navber>
		<Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
			<template #scroll class="detail-scroll">
				<detail-swiper :top-images="topImages"></detail-swiper>
				<detail-base-info :goods="GoodsItem"></detail-base-info>
				<detail-shop-info v-bind:shop="Shop"></detail-shop-info>
				<detail-goods-info :goodInfo="GoodInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
				<detail-param-info ref="param" :paramss="paramss"></detail-param-info>
				<detail-commentlnfo ref="comment" :rate="rate"></detail-commentlnfo>
				<goods ref="recommend" :goods="recommends"></goods>
			</template>
		</Scroll>
		<detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
		<tost :message="message" :show="show"></tost>
	</div>
</template>
<script>
	import {
		getDetail,
		GoodsItem,
		Shop,
		GoodInfo,
		paramss,
		recommend
	} from '../../network/detail.js'
	import DetailNavber from './childDetail/DetailNavber.vue'
	import DetailSwiper from './childDetail/DetailSwiper.vue'
	import DetailBaseInfo from './childDetail/DetailBaseInfo.vue'
	import DetailShopInfo from './childDetail/DetailShopInfo.vue'
	import DetailGoodsInfo from './childDetail/DetailGoodsInfo.vue'
	import DetailParamInfo from './childDetail/DetailParamInfo.vue'
	import DetailCommentlnfo from './childDetail/DetailCommentlnfo.vue'
	import Goods from '../../components/content/goods/Goods.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import DetailBottomBar from './childDetail/DetailBottomBar.vue'
	import Tost from '../../components/common/toast/Tost.vue'
	export default {
		name: 'Detail',
		components: {
			DetailNavber,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentlnfo,
			DetailBottomBar,
			Goods,
			Scroll,
			Tost
		},
		data() {
			return {
				iid: null,
				topImages: [],
				GoodsItem: {},
				Shop: {},
				GoodInfo: {},
				paramss: {},
				rate: {},
				recommends: [],
				themeTopYs: [],
				getThemeTopY: null,
				currentIndex: 0,
				message:'',
				show:false
			}
		},
		created() {
			this.iid = this.$route.params.iid;
			getDetail(this.iid).then(res => {
				console.log(res)
				const data = res.result
				this.topImages = data.itemInfo.topImages
				this.GoodsItem = new GoodsItem(data.itemInfo, data.columns, data.shopInfo.services)
			
				this.Shop = new Shop(data.shopInfo)
				this.GoodInfo = new GoodInfo(data.detailInfo, data.skuInfo)
				this.paramss = new paramss(data.itemParams, data.itemParams)
				this.rate = data.rate.list[0]
		
			})
			recommend().then(res => {
				this.recommends = res.data.list
			})
		},
		mounted() {
			this.$bus.$on('itemImageLoad', () => {
				this.$refs.scroll && this.$refs.scroll.refresh()
			})
		},
	
		updated() {

		},

		methods: {
			itemClick(index) {
				this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)

			},
			detailImageLoad(){
				this.themeTopYs = []
				this.themeTopYs.push(0) /* el是拿到根组件*/
				this.themeTopYs.push(this.$refs.param.$el.offsetTop - 36)
				this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 36)
				this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 36)
				this.$refs.scroll &&this.$refs.scroll.refresh()
			},
			contentScroll() {

			},
		  addToCart(){
			const product={}
			product.iid = this.iid;
			product.image = this.topImages[0];
			product.title = this.GoodInfo.title;
			product.desc = this.GoodInfo.desc;
			product.price = this.GoodsItem.price;
            this.$store.dispatch('addCart',product).then(res=>{
				this.message=res,
				this.show=true,
				setTimeout(()=>{
				this.message=res,
				this.show=false
				},1500)
			})
		  }


			//这里是从data里面拿到数据
		}

	}
</script>

<style scoped>
	#detail {
		position: relative;
		z-index: 10;
		background-color: white;
		padding-top: 35px;
	}

	.wrapper {
		height: calc(100vh - 87px);
	}
</style>
