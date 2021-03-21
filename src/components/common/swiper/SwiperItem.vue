<template>                   
	<div class="slide">                 <!-- 建立一个插槽-->
		<slot></slot>
	</div>
</template>

<script>
	export default{                      /* 导入*/
		name:"slide"
	}
</script>

<style scoped>
	.slide{                                     /* 宽度100%*/
		width:100%;
		flex-shrink: 0;                      /* 防止被压缩，flex防止大于容器大小*/
}
		.slide img{
			width:100%                           /* 宽度100%*/
		}
</style>
