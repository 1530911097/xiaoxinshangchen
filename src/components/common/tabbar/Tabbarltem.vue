<template>
	<div id="tabbar-item" @click="tabClick">
	<div v-if="!isActive"><slot name="top_top"></slot></div>
	<div v-else><slot name="top_center"></slot></div>
	<div :style="activestyle"><slot name="top_z"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'Tabbarltem',
		props:{
			path:String ,
			activeColor:{
				type:String,
				default :'red'
		}
		},
	     data(){
		 return{}
		 },
		 computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!==-1
			},
			activestyle(){
			return	this.isActive ?{color:this.activeColor}:{}
			}
		 },
		methods:{
			tabClick(){
			return this.$router.replace(this.path)
				
			}
		}
	}
</script>

<style scoped>
	#tabbar-item{
		text-align: center;
		margin-top: 4px;
		flex: 1;	
		height: 49px;
		font-size: 14px;
	}
	#tabbar-item img{
		width: 26px;
		height: 26px;
		vertical-align: middle;
	}
</style>
