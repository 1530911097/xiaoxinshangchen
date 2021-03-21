<template>
	<div id="user-item">
		<div class="item-item" v-for="item in title">
			<span class="item-info">{{item}}</span>
		</div>
	    <div class="item-item" v-for="item in titles">
	    	<span class="item-info">{{item}}</span>
	    </div>
	</div>
</template>

<script>
	export default{
		name:'UserItem',
		props:{
			title:{
				type:Array,
				default(){
					return []
				}
			},
			titles:{
				type:Array,
				default(){
					return[]
				}
			},
			
		}
	}
</script>

<style scoped>
	#user-item{
		border-top: 10px solid #f7f7f7;
		padding-left: 40px;
	}
	.item-item{
		padding: 12px 15px 12px 0px;
		border-bottom: 1px solid #f7f7f7;
	}

</style>
