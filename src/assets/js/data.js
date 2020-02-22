import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    msg:'nanzi'
  },
  mutations:{
	  nanziCartCount(state){
		state.msg='nanzi'
	  },
	  nvziCartCount(state){
		state.msg='nvzi'
	  },
	  peijianCartCount(state){
		state.msg='peijian'
	  },
	  ertongCartCount(state){
		state.msg='ertong'
	  },
	  pinpaiCartCount(state){
		state.msg='pinpai'
	  }
  }
})