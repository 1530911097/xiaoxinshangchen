export default{
  addTart(state,payload){
	  payload.count++
	 
  },
 addback(state,payload){
	payload.checked=true
	state.cartList.push(payload)
}
  }