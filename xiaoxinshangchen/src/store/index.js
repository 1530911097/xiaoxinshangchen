import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
Vue.use(Vuex)


const store=new Vuex.Store({
   state:{
	   cartList:[]
   },	 
    mutations,
	actions,
    getters,

  
})

export default store


