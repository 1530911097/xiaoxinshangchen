<template>
	<div id="shop-info">
		<div id="shop-info-a">
			<img :src="shop.shopLogo">
			<span class="shopname">{{shop.name}}</span>
		</div>
		<div class="shop-info-zong">
			<div class="shop-info-left">
				<span class="left-left">
					<span class="left-left-size">{{shop.cSells|sellCountFilter}}</span>
					<div class="shop-info-left-z">总销量</div>
				</span>
			<!-- 	sellCountFilter: function(value) {
					if (value > 1000) {
						return (value / 10000).toFixed(2) + '万'
					}
				} -->
				<span class="left-left">
					<span class="left-left-size">{{shop.cGoods}}</span>
					<div class="shop-info-left-z">全部宝贝</div>
				</span>
			</div>
			<div class="shop-item-right">
				<tr v-for="item in shop.score">
					<td>{{item.name}}</td>
					<td class="isb" :class="{'itemm':item.isBetter}">{{item.score}}</td>
					<td class="issb" :class="{'move':item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
				</tr>
			</div>
		</div>
		<button class="btn-btn">进店逛逛</button>
	</div>



	</div>
</template>

<script>
	export default {
		name: 'DetailShopInfo',
		props: {
			shop: {
				type: Object,
				default () {
					return {}
				}
			}
		},
	 filters:{
		 sellCountFilter:function(value){
			if(value>10000){
				return (value/10000).toFixed(2)+'万'
			}
			 
		 },
		 
	 }
	 
	}
</script>

<style scoped>
	#shop-info {
		margin: 20px 0px 0px 0px;
		border-bottom: 10px solid #E9E9E9;
	}

	#shop-info-a {
		padding: 10px;
	}

	#shop-info-a img {
		vertical-align: middle;
		width: 50px;
		border-radius: 30px;
		border: 1px solid gray;
	}
  .left-left-size{
	  font-size: 20px;
  }
	#shop-info-a span {
		margin-left: 20px;
	}

	.shop-info-zong {
		display: flex;
	
	}

	.left-left {
		padding:50px 0px 20px 0px;
		display: inline-block;
		font-size: 15px;
		
	}

	.shop-info-left-z {
		margin-top: 5px;
		font-size: 12px;
	}
	.shop-info-left {
		width: 100%;
		text-align: center;
		flex: 1;
		border-right: 1px solid gray;
	}

	.shop-item-right {
		padding: 10px 10px 20px 10px;
		width: 100%;
		text-align: center;
		flex: 1;
	}

	.shop-item-right tr {
		font-size: 14px;
		width: 100%;
		display: flex;
	}

	.shop-item-right td {
		margin-top: 7px;
		flex: 1;
	}

	.isb {
		color: #42B983;
	}

	.itemm {
		color: deeppink
	}

	.issb {
		color: #42B983;

	}

	.issb span {
		padding: 1px;
		background-color: #42B983;
		color: white;
	}

	.move {
		color: deeppink
	}

	.move span {
		background-color: deeppink;
		color: deeppink;
		color: white;
	}

	.btn-btn {
		padding: 5px 35px 5px 35px;
		margin-bottom: 35px;
		border-radius: 10px;
		border: 0px;
		font-size: 14px;
		background-color: #E5E5E5;
		display: block;
		margin: 10px auto;

	}
</style>
