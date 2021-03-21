<template>
	<div id="nav-item">
		<span class="left"><slot name="left"></slot></span>
		<span class="center"><slot name="center"></slot></span>
		<span class="right"><slot name="right"></slot></span>
	</div>
</template>

<script>
	export default{
		name:'Navbar',
	}
</script>

<style scoped="scoped">
	#nav-item{
		position:fixed;
		left: 0;
		right: 0;
		top: 0;
		background-color: deeppink;
		z-index: 9;
		color: white;
		display: flex;
		height: 35px;                                     /* 盒子概念*/
		text-align: center;                                /* 高度35，文字居中。行高35 盒子阴影*/
		line-height: 35px;
		box-shadow: 0 1px 1px rgba(100,100,100,0.1);
	}
	.left,.right{
		width: 75px;
	}
	.center{
		flex: 1;
	}
</style>
