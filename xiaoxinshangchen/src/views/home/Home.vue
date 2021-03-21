<template>
	<div id="home">
		<navbar class="home-navbar"><template #center>购物街</template></navbar>
		<tab-control :titles="['流行','新款','推荐']" @tabClick="tabClick" class="tab-home-control" v-show="istabFixed"
			ref="tabControl1"/>
		<scroll class="content" ref="scroll" @scroll="contentScroll" :pull-up-load="true" @pullingUp="LoadMore"
			:probe-type="3">

			<template #scroll>
				<home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
				<recommend-view :recommend="recommend" @recommendImgLoad.once="recommendImgLoad"></recommend-view>
				<Feature></Feature>
				<tab-control :titles="['流行','新款','推荐']" @tabClick="tabClick" ref="tabControl2"></tab-control>
				<Goods :goods="showGoods" />{{showGoods.img}}</Goods>
			</template>
		</scroll>
		<back-top @click.native='backClick' v-show="isShow"></back-top>
	</div>
</template>

<script>
	import scroll from '../../components/common/scroll/Scroll.vue'
	import navbar from '../../components/common/navar/Navbar.vue'
	import HomeSwiper from './childHome/HomeSwiper.vue'
	import RecommendView from './childHome/RecommendView.vue'
	import Feature from './childHome/Feature.vue'
	import TabControl from '../../components/content/tabControl/TabControl.vue'
	import Goods from '../../components/content/goods/Goods.vue'
	import {
		getHomeMultidata,
		getGoods
	} from '../../network/home.js'
	import backTop from '../../components/content/backTop/backTop.vue'
	export default {
		name: 'Home',
		components: {
			navbar,
			HomeSwiper,
			RecommendView,
			Feature,
			TabControl,
			Goods,
			backTop,
			scroll
		},
		data() {
			return {
				banners: [],
				recommend: [],
				goods: {
					/* 初始化保存数组，goods的单向绑定*/
					/* 因为是三页*/
					'pop': {
						page: 0,
						list: []
					},
					/* page:页。list:[]条*/
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
				},
				currentType: 'pop',
				/* 这里是为了默认一个值，来显示数据*/
				tabOffsetTop: 0,
				isShow: false,
				/* 当默认开始消失，等滑动超过1000这显示*/
				istabFixed: false,
				recommendImg: false
			}
		},
		computed: {
			/*这里使用的是，计算方法computed*/
			showGoods() {
				/* 这里定义了商品的方法*/
				return this.goods[this.currentType].list /* 这个数组，指向这个元素的.list*/
			}
		},
		/* -2552  14838  15035*/
		created() {
			this.getHomeMultidata()
			this.getGoods('pop')
			this.getGoods('new')
			this.getGoods('sell')
			/* 利用refs去获取tab-control组件的元素的*/
		},
		mounted() {
			const refresh = this.debounce(this.$refs.scroll && this.$refs.scroll.refresh, 500)
			this.$bus.$on('itemImageLoad', () => {
				refresh()
			})
		},
		/* <scroll class="content" ref="scroll" @scroll="contentScroll" :pull-up-load="true"  @pullingUp="LoadMore"  :probe-type="3"> */
		methods: {
			debounce(func, delay) {
				let timer = null
				return function(...args) {
					if (timer) return clearTimeout(timer)
					timer = setTimeout(() => {
						func.apply(this, args)
					}, delay)
				}

			},
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				/* 		this.$refs.tabControl1.currentIndex = index; //这里就是理解: 这里，使用refs指向，元素tabControl1.currenIndex=参数
						this.$refs.tabControl2.currentIndex = index; */
			},
			contentScroll(position) {
				this.isShow = -position.y > 1000; /* 这里是判断哪个按钮什么时候显示大于1000则消失*/
				this.istabFixed = (-position.y + 36) > this.tabOffsetTop

			},

			recommendImgLoad() {
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
				/* 通过offsetTop js属性拿到可视图高561px*/
			},
			swiperImgLoad() {},
			LoadMore() {

				this.getGoods(this.currentType);
				this.$refs.scroll.scroll.refresh()
			},
			backClick() {
				this.$refs.scroll.scroll.scrollTo(0, 0, 1000)
			},
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list
					this.recommend = res.data.recommend.list
				})
			},
			getGoods(type) {
				const page = this.goods[type].page + 1
				getGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					this.$refs.scroll.finishPullUp() /* 这个无限的加 */

				})
			},

		}

	}
</script>

<style scoped>
	#home {
		padding-top: 35px;
	}

	.home-navbar {

		background-color: var(--color-tint);
		color: white;
		position: fixed;
		z-index: 1;
		left: 0;
		right: 0;
		top: 0;
	}

	.tab-home-control {
		position: fixed;
		z-index: 1;
		width: 100%;
	}

	.content {

		height: calc(100vh - 87px);
		/*overflow: hidden;*/
	}
</style>
