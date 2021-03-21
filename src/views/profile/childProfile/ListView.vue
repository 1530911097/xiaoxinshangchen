<template>
	<div id="list-view">
		<div id="view-item">
			<div class="item"></div>
			<div class="item-info">
				<div><a href="">登录</a>/<a href="">注册</a></div>
				<div style="font-size: 10px;">暂无绑定手机号</div>
			</div>
		 </div>
		 <div id="view-info">
			 <div id="info">
				 <span class="price">0.00</span><span>元</span><br/>
				 <span>我的余额</span>
			 </div>
			  <div id="">
				  <span class="price">0</span><span>个</span><br/>
				  <span>我的优惠</span>
			  </div>
			   <div id="">
				   <span class="price">0</span><span>分</span><br/>
				   <span>我的积分</span>
			   </div>
			 </div>
	</div>
</template>

<script>
	export default{
		name:'ListView',
	}
</script>

<style scoped>
	#list-view{
		color: white;
		background-color: #FF1493;
	}
	#view-item{
		padding: 20px;
		display: inline-block;
	}
	.item{
		width: 65px;
		height: 65px;
		border-radius: 50%;
		background-color: white;
		display: inline-block;
		vertical-align: middle
	}
	.item-info{
		margin-left: 15px;
		vertical-align: middle;
		display: inline-block
	}
	.item-info div{
		margin-top: 5px;
	}
	.item-info a{
		color: white;
	}
	#view-info{
		background-color: white;
		color: black;
		display: flex;
	}
	#view-info div{
		text-align: center;
		padding: 20px;
		flex: 1;
		border: 1px solid #F5F5F5;
	}
	.price{
		font-size: 25px;
		color: hotpink;
	}
</style>
