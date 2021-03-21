<template>
	<div id="good-info" v-if="Object.keys(goodInfo).length !== 0">
		
		<div id="info">
		<div class="start">
		</div>
		<span class="end"></span>
		<span>{{goodInfo.desc}}</span>
		<span class="and"></span>
		
		<div id="item" style="margin-top: 20px;">
		<span>{{goodInfo.detailImage[0].key}}</span>
		</div>
		</div>
		<div id="info-item">
		 <img v-for="(item, index) in goodInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad"> 
		</div>
	</div>
</template>
<script>
	
	export default{
		name:'DetailGoodsInfo',
		props:{
			goodInfo:{
				type:Object,
				default(){
					return {}
				}
				}
			},
			data(){
				return {
					counter:0,
					imagesLength:0
				}
		
    },
    methods:{
      imgLoad(){
          this.$emit('detailImageLoad')   
	  }
	  }
    
	}
</script>

<style scoped>
	#good-info{
		border-bottom: 5px solid #E7E7E7;
	}
	#info{
		
		padding: 20px;
		font-size: 14px;
	}
	.end{
		margin-bottom: 15px;
		display: block;
		width: 90px;
		background-color: black;
		height: 1px;
		 position: relative;
	}
	.and{
		float: right;
		margin-top: 15px;
		display: block;
		width: 90px;
		background-color: black;
		height: 1px;
		 position: relative;
	}
	.start{
		float: left;
		display: block;
		width: 5px;
		height: 5px;
		background-color: #000000;
	}
	img{
		width: 100%;
		 
	}
</style>
