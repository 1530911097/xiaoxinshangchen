<template>
	<div id="profile">
	<navbar><template #center>我的商品</template></navbar>
	<ListView></ListView>
	<UserItem :title="title"></UserItem>
	<UserItem :titles="titles"> </UserItem>
	</div>
</template>

<script>
	import navbar from '../../components/common/navar/Navbar.vue'
	import ListView from './childProfile/ListView.vue'
	import UserItem from './childProfile/UserItem.vue'
	export default{
		name:'Profile',
		components: {
			navbar,
			ListView,
			UserItem
		},
		data(){
			return {
				title:['我的消息','积分商城','会员卡'],
				titles:['我的购物车','下载购物车App']
			}
		}
	}
</script>

<style scoped>
	#profile{
		padding-top: 35px;
	}
</style>
