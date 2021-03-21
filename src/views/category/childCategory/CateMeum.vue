<template>
<div id="CateMeum">
		<div class="menu-list-item" :class="{active:index===currentIndex}" v-for="(item,index) in meum" :key="index" @click="itemClick(index)">
			{{item.title}}
		</div>
	</div>

</template>

<script>
	export default{
		name:'CateMeum',
	
		props:{
			meum:{
				type:Array,
				default(){
					return {}
				}
			}
		},
		
		data(){
			return{
				currentIndex:0,
			}
		},
		methods:{
			itemClick(index){
			 this.currentIndex=index
			this.$emit('selectItem',index)
					
			}
		}
	}
</script>

<style scoped>
	#CateMeum{
		text-align: center;
		width: 100px;
		padding-top: 35px;
		font-size: 14px;
	}
#tab-menu{
	background-color: #f6f6f6;
	height: 100%;
	width: 100px;
	box-sizing: border-box;
}
	.menu-list-item{
		height: 45px;
		line-height: 45px;
		text-align: center;
		font-size: 14px;
		background-color: #f5f5f5;
	}
	.active{
		font-weight: 700;
		color: red;
		background-color: #fff;
		border-left: 3px solid var(--color-high-text);
	}
</style>
