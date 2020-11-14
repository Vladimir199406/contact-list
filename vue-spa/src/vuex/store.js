import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    savedContactList:[]
  },
  mutations:{
    LIST_OF_CONTACTS_ADDING_ELEMENT: (state,tagInputContent, index) =>{
      state.savedContactList.push(state.savedContactList[index] = tagInputContent);
    },
    LIST_OF_CONTACTS_DELETE_ELEMENT: (state,index) =>{
      state.savedContactList.splice(index, 1);
    },
  }
  ,
  actions: {
    ADD_CONTACT_TO_LIST_OF_CONTACTS({commit}, tagInputContent){
      commit('LIST_OF_CONTACTS_ADDING_ELEMENT', tagInputContent);
    },
    DELETE_CONTACT_FROM_LIST_OF_CONTACTS({commit}, index){
      commit('LIST_OF_CONTACTS_DELETE_ELEMENT', index);
    },
  },
  getters: {
    LIST_OF_CONTACTS(state){
      return state.savedContactList;
    }
  },
  //below is a plugin to save the state of the list
  plugins: [createPersistedState(
    {
      paths:['savedContactList']
    }
  )],
})

export default store;
