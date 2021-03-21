<template>
	<div id="commen-info"  class="comment-infoa"  v-if="Object.keys(rate).length !== 0">
		<div id="commen-cliead">
		<div class="info-info">
			<span>用户评价</span>
			<span style="float: right;">更多<span style="margin-left:10px;">></span></span>
		</div>
		<div id="info-item">
		<img :src="rate.user.avatar">
		<span class="shopname">{{rate.user.uname}}</span>
		</div>
		<div id="info-info">
			<div>{{rate.content}}</div>
			<span class="infoo">{{rate.created}}</span>
			<span class="infoo">{{rate.style}}</span>
		</div>
	</div>
	</div>
</template>

<script>
	
	export default{
		name:'DetailCommentlnfo',
		props:{
			rate:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			datea:function(Value){
				let date=new Date(Value*1000);
					console.log(date)
			    return {date}
			
			}
		}	
		
	}
</script>

<style scoped>
	#commen-info{
		
		border-bottom: 5px solid #E7E7E7;
	}
	#commen-cliead{
		padding: 10px;
		font-size: 14px;
	}
	.info-info{
		padding:10px 0px 10px 0px;
		border-bottom: 1px solid #e7e7e7;
		
	}
	#info-item img{
	width: 50px;
    height:50px;
	margin:10px 10px 10px 0px;
	border-radius: 50%;
	border: 1px solid #f5f5f5;
    vertical-align: middle;

	}
	#info-info{
		
		margin-bottom: 10px;
	}
	#info-info div{
		margin-bottom: 7px;
	}
#info-info span{
	    color: #A3A3A5;
	    padding: 7px;
	    margin-left: -7px;
		font-size: 12px;
	}
</style>
