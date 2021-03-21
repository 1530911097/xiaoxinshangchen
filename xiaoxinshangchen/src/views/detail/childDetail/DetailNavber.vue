<template>
	<div id="detail-nav">
		<narbar>
			<template  #left >
				<div class="back" @click="backClick">
					<img src="../../../assets/img/common/back.svg" alt="">
					</div>
					</template>
					 
			<template #center>
				<div id="tab-ter">
					<span v-for="(item,index) in titles" class="tab-item" :class="{active:index===currenIndex}" @click="itemClick(index)" :key="index">
						{{item}}
					</span>
				</div>
			</template>
		</narbar>
		
	</div>
</template>

<script>
	import Narbar from '../../../components/common/navar/Navbar.vue'

	export default{
		name:'DetailNavber',
		data(){
			return {
			titles:['商品','参数','评价','推荐'],
			currenIndex:0
			}
		},
		components:{
			Narbar
		},
		methods:{
			itemClick(index){
				 this.currenIndex=index
				 this.$emit('itemClick',index)
			},
			backClick(){
				this.$router.back()               /* 这里是一个返回的方法*/
			}
		}
	}
</script>

<style scoped="scoped">
#nav-item{
	background-color: #FFFFFF;
	color: black;
}
img{
	width: 20px;
	margin-top: 7px;
}
#tab-ter{
	font-size: 14px;
	display: flex;
}
.tab-item{
	flex: 1;
}
.active{
	color: plum;
}
</style>
