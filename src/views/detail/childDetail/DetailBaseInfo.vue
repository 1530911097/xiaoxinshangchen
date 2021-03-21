<template>
<div id="detail-base" v-if="Object.keys(goods).length !== 0"> <!-- 当没数据的时候不进行渲染 -->
	<!-- v-if判断对象是否为空 -->
	<div id="base-item-info">
	<div>{{goods.title}}</div>
	
	<div class="item-info-price">
	<span class="price">{{goods.price}}</span>
	<span class="oldPrice">{{goods.oldPrice}}</span>
	<span class="discountDesc">{{goods.discountDesc}}</span>
	</div>
	</div>
	<div id="base-item">
		<span>{{goods.columns[0]}}</span>
		<span>{{goods.columns[1]}}</span>
		<span>{{goods.services[goods.services.length-1].name}}</span>
	</div>
	<div id="base-info">
		<span class="base-info-item"  v-for="index in goods.services.length-1"  :key="index">
		<img :src="goods.services[index-1].icon" >
		<span>{{goods.services[index-1].name}}</span>
		</span>
	</div>
	</div>
</template>



<script>
	export default{
		name:'DetailBaseInfo',
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>
#detail-base{
	padding: 10px;
	font-size: 16px;
	border-bottom: 5px solid #F7F7F7;
	
}

#base-item{
	font-size: 14px;
	display: flex;
	padding: 10px 0px 10px 0px;
	justify-content: space-between;
	border-bottom: 1px solid #F7F7F7;
}
.item-info-price{
	font-size: 26px;
	margin-top: 15px;
}
.price{
	color: deeppink;
}
.oldPrice{
  text-decoration: line-through;
	font-size: 12px;
	margin-left: 15px;
}
.discountDesc{
	padding: 3px;
	border-radius: 10px;
	margin-left: 12px;
	font-size: 14px;
	color: white;
	background-color: deeppink;
}
#base-info{
	display: flex;
    justify-content: space-between;
    line-height: 60px;
}
#base-info span{
	font-size: 13px;
	color: #333;
}
#base-info img{
	width: 14px;
	height: 14px;
	position: relative;
	top: 2px;
}
</style>
