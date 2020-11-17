import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    savedContactList:[],
    selectedContact: '',
    savedFieldArr: [],
    savedValueArr: [],
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
    FIELD_ARRAY_ADDING_ELEMENT: (state, tagInputField, index) =>{
      state.savedFieldArr.push(state.savedFieldArr[index] = tagInputField);
    },
    VALUE_ARRAY_ADDING_ELEMENT: (state, tagInputValue, index) =>{
      state.savedValueArr.push(state.savedValueArr[index] = tagInputValue);
    },
    FIELD_ARRAY_DELETE_ELEMENT: (state,index) =>{
      state.savedFieldArr.splice(index, 1);
    },
    VALUE_ARRAY_DELETE_ELEMENT: (state,index) =>{
      state.savedValueArr.splice(index, 1);
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
    ADD_FIELD({commit}, tagInputField){
      commit('FIELD_ARRAY_ADDING_ELEMENT', tagInputField);
    },
    ADD_VALUE({commit}, tagInputValue){
      commit('VALUE_ARRAY_ADDING_ELEMENT', tagInputValue);
    },
    DELETE_FIELD_FROM_FIELD_ARRAY({commit}, index){
      commit('FIELD_ARRAY_DELETE_ELEMENT', index);
    },
    DELETE_VALUE_FROM_VALUE_ARRAY({commit}, index){
      commit('VALUE_ARRAY_DELETE_ELEMENT', index);
    },

  },
  getters: {
    LIST_OF_CONTACTS(state){
      return state.savedContactList;
    },
    SELECTED_CONTACT(state){
     return state.selectedContact;
    },
    FIELD_ARRAY(state){
      return state.savedFieldArr;
    },
    VALUE_ARRAY(state){
      return state.savedValueArr;
    }
  },
  //below is a plugin to save the state when reloading the page
  plugins: [createPersistedState(
    {
      paths:['savedContactList', 'selectedContact', 'savedFieldArr', 'savedValueArr']
    }
  )],
})

export default store;
