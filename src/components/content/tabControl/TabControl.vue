<template>
	<div id="tab-ter">
		<div v-for="(item,index) in titles" class="tab-item" 
		:class="{active:index===currentIndex}" @click="itemClick(index)" :key="index">
			<span>{{item}}</span>
		</div>
		 
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []}}},
		data(){ return{currentIndex:0,}},
		methods:{
			itemClick(index){
				this.currentIndex=index,
				this.$emit('tabClick',index)
			}
		}
		
	}
</script>

<style scoped>
	#tab-ter{
	display: flex;
	text-align: center;
	font-size: 15px;
	height: 40px;
	line-height: 40px;
	background-color: white;
		
	}
	.tab-item{
		flex: 1;
	}
	.tab-item span{
		padding: 5px;
		
	}
	 .active{
		height: 35px;
		width: 35px;
	}
	.active span{
	  border-bottom: 3px solid var(--color-tint);
	}
</style>
