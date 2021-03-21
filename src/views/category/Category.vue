<template>
	<div id="Category">
		<navbar>
			<template #center>
				商品分类</template>
		</navbar>

		<div id="left">
			<CateMeum :meum="meum" @selectItem="selectItem"></CateMeum>
		</div>

		<scroll ref="scroll" id="tab-content" :data="[categoryData]">
			<template #scroll>
				<div id="right">
					<CateContentCategory :subcategories="showSubcategory"></CateContentCategory>
				</div>
			</template>
		</scroll>

	</div>
</template>

<script>
	import navbar from '../../components/common/navar/Navbar.vue'
	import scroll from '../../components/common/scroll/Scroll.vue'
	import CateMeum from './childCategory/CateMeum.vue'
	import CateContentCategory from './childCategory/CateContentCategory.vue'
	import {
		getCetegory,
		getSubcategory
	} from '../../network/category.js'
	export default {
		name: 'Category',
		components: {
			navbar,
			CateMeum,
			CateContentCategory,
			scroll
		},
		data() {
			return {
				meum: [],

				categoryData: {

				},
				currentIndex: -1
			}
		},
		created() {
			this._getCetegory()
		},
		computed: {
			showSubcategory() {
				if (this.currentIndex === -1) return {} /* 这个运用在Tabmenu===-1*/
				return this.categoryData[this.currentIndex].subcategories
			}
		},

		methods: {
		
			_getCetegory() {
				getCetegory().then(res => {
					console.log(res.data)
					this.meum = res.data.category.list
					for (let i = 0; i < this.meum.length; i++) {
						this.categoryData[i] = {
							subcategories: {},
						}
					}
					this._getSubcategories(0)
				})
			},
			_getSubcategories(index) {
				this.currentIndex = index;
				const mailKey = this.meum[index].maitKey;
				getSubcategory(mailKey).then(res => {
					this.categoryData[index].subcategories = res.data
					this.categoryData = { ...this.categoryData}
					console.log(res.data)
				})
			},
		selectItem(index) {
			console.log('a')
			this._getSubcategories(index)
		},
		}
	}
</script>

<style scoped>
	#Category {
		width: 100%;
		display: flex;
	}

	.wrapper {
		height: calc(100vh - 87px);
	}
</style>
