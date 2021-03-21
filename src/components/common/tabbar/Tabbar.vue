<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'Tabbar',
	}
</script>

<style scoped>
	#tab-bar{
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
		display: flex;
	    box-shadow: 0 -3px 1px rgba(100,100,100,.2);
		background-color: #e9e9e9;
	   
	}
</style>
