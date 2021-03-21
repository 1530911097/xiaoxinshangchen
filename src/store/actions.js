export default{
	addCart(context,payload){
		 return new Promise((resolve,reject) => {
			 var oldPayload=context.state.cartList.find(function(item){
				return item.iid===payload.iid
			 })
			 if(oldPayload){
				context.commit('addTart',oldPayload) 
				 resolve('当前的商品数量+1')
			 }else{
			payload.count=1,
			context.commit('addback',payload) 
			 resolve('将商品添加购物车')
		   }
		   })
	}
	
}