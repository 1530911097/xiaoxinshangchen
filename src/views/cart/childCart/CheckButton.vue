<template>
	<div id="check-button" 
	:class="{active:checked}" @click="selectItem">
		<img src="../../../assets/img/cart/tick.svg" />
	</div>
</template>

<script>
	export default{
		name:'CheckButton',
		props:{
		value:{
		type:Boolean,
		default:true
			}
		},
		data() {
			  return {
			    checked: this.value
		  }
		},
		methods: {
		  selectItem() {
		    this.$emit('checkBtnClick')
		    // console.log('---');
		  }
		},
		watch: {
			value(newValue) {
		    this.checked = newValue;
		  }
		}
		}
	
</script>

<style scoped>
	#check-button{
		
		border-radius: 50%;
		border: 1px solid #aaa;
	}
	.active{

		background-color:red;
		border-color: #ff8198;
	}
</style>
