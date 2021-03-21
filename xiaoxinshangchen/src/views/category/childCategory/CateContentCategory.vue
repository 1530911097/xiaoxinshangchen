<template>
	<div id="cate-gory">
		<scroll ref="scroll" id="tab-menu">  <!-- 利用的是scroll的滚动-->
		<template #scroll> <!--组件套用-->
		<div class="gory-item" v-for="(item,index) in subcategories.list" :key="index">
		<a :href="item.link">
		<img class="myimg" :src="item.image" />
		<div >{{item.title}}</div>
		</a>
		</div>
		</template>
		</scroll>
	</div>
</template>

<script>
	    import Scroll from '../../../components/common/scroll/Scroll.vue'
	    export default{
		name:'CateContentCategory',
		components:{
		Scroll, 
		},
		props:{
			subcategories:{
				type:Object,
				default(){
					return []
				}
			}
		},
		watch:{
			subcategories(){
		     this.$nextTick(()=>{
		     this.$refs.scroll.scroll.refresh()
		},300)
		}
		},
	}
</script>

<style scoped>
	.wrapper{
		height: calc(100vh - 30px);
	    overflow: hidden;
	
	}
	#cate-gory{
		padding: 35px 0px 5px 5px ;
		font-size: 12px;
		width: 100%;
		
	}
	.gory-item{
		margin-left: 1;
		text-align: center;
		width: 33%;
		display: inline-block;
	}
	.myimg{
		width: 100%;
		padding: 10px;
	}
	
</style>
