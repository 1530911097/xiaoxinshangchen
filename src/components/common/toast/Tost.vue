<template>
	<div class="toast" v-show="show">
	<div>{{message}}</div>
	</div>
</template>

<script>
	export default{
		name:'Tost',
		props:{
			message:{
			type:String,
		    default:''
			},
			show:{
				type:Boolean,
				default:false
			}
		
		}
	}
</script>

<style scoped>
	.toast{
       position: fixed;
	    left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		background-color: #000000;
		color: white;
		 padding: 8px 10px;
		border-radius: 10px;
	}
</style>
