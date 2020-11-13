import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    savedContactList:[]
  },
  mutations:{
    LIST_OF_CONTACTS_ADDING_ELEMENT: (state) =>{
      state.savedContactList.push();
    }
  }
  ,
  actions: {
    CHANGE_LIST_OF_CONTACTS({commit}){
      commit('LIST_OF_CONTACTS_ADDING_ELEMENT');
    }
  },
  getters: {
    LIST_OF_CONTACTS(state){
      return state.savedContactList;
    }
  },

})

export default store;
