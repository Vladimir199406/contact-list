import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    savedContactList:[],
    selectedContact: ''
  },
  mutations:{
    LIST_OF_CONTACTS_ADDING_ELEMENT: (state,tagInputContent, index) =>{
      state.savedContactList.push(state.savedContactList[index] = tagInputContent);
    },
    LIST_OF_CONTACTS_DELETE_ELEMENT: (state,index) =>{
      state.savedContactList.splice(index, 1);
    },
    INFO_ABOUT_SELECTED_CONTACT: (state, index) =>{
      state.selectedContact = state.savedContactList[index];
      return state.selectedContact;
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
    GET_INFO_ABOUT_SELECTED_CONTACT({commit}, index){
      commit('INFO_ABOUT_SELECTED_CONTACT', index);
    },

  },
  getters: {
    LIST_OF_CONTACTS(state){
      return state.savedContactList;
    },
    SELECTED_CONTACT(state){
     return state.selectedContact;
    }
  },
  //below is a plugin to save the state when reloading the page
  plugins: [createPersistedState(
    {
      paths:['savedContactList', 'selectedContact']
    }
  )],
})

export default store;
