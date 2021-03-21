<template>
	<div id="goods">
     <GoodsItem  v-for="(item,index) 
	 in goods" :goods-item="item" :key="index"/>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem.vue'
	export default {
		name: 'Goods',
		components:{GoodsItem},
		props: {
			goods: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>

<style scoped>
 #goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
  }
</style>
