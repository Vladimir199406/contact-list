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
    savedPreviousField: '',
    savedPreviousValue: '',
    editedNewField: '',
    editedNewValue: '',
    changedLastField: '',
    changedLastValue: ''


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
    SAFETY_PREVIOUS_FIELD: (state, index) =>{
      state.savedPreviousField = state.savedFieldArr[index];
      return state.savedPreviousField;
    },
    SAFETY_PREVIOUS_VALUE: (state, index) =>{
      state.savedPreviousValue = state.savedValueArr[index];
      return state.savedPreviousValue;
    },
    EDITING_FIELD: (state, index) =>{
      state.editedNewField = document.getElementsByClassName("inputFieldToEdit")[index].value;
      state.savedFieldArr[index] = state.editedNewField;
    },
    EDITING_VALUE: (state, index) =>{
      state.editedNewValue = document.getElementsByClassName("inputValueToEdit")[index].value;
      state.savedValueArr[index] = state.editedNewValue;
    },
    CANCELING_LAST_CHANGE_FIELD: (state, index) => {
      state.changedLastField = state.savedPreviousField;
      state.savedFieldArr[index] = state.changedLastField;
      document.getElementsByClassName("returningPreviousField")[index].innerText = 'Поле:' + state.changedLastField;
    },
    CANCELING_LAST_CHANGE_VALUE: (state, index) => {
      state.changedLastValue = state.savedPreviousValue;
      state.savedValueArr[index] = state.changedLastValue;
      document.getElementsByClassName("returningPreviousValue")[index].innerText = 'Значение:' + state.changedLastValue;
    }

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
    SAVE_PREVIOUS_FIELD({commit}, index){
      commit('SAFETY_PREVIOUS_FIELD', index);
    },
    SAVE_PREVIOUS_VALUE({commit}, index){
      commit('SAFETY_PREVIOUS_VALUE', index);
    },
    EDIT_FIELD({commit}, index, tempInputField){
      commit('EDITING_FIELD', index, tempInputField);
    },
    EDIT_VALUE({commit}, index){
      commit('EDITING_VALUE', index);
    },
    CANCEL_LAST_CHANGE_FIELD({commit}, index){
      commit('CANCELING_LAST_CHANGE_FIELD', index);
    },
    CANCEL_LAST_CHANGE_VALUE({commit}, index){
      commit('CANCELING_LAST_CHANGE_VALUE', index);
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
    },
    SAVED_PREVIOUS_FIELD(state){
      return state.savedPreviousField;
    },
    SAVED_PREVIOUS_VALUE(state){
      return state.savedPreviousValue;
    },
    EDITED_FIELD(state){
      return state.editedNewField;
    },
    EDITED_VALUE(state){
      return state.editedNewValue;
    },
    CANCELED_LAST_CHANGED_FIELD(state){
      return state.changedLastField;
    },
    CANCELED_LAST_CHANGED_VALUE(state){
      return state.changedLastValue;
    },


  },
  //below is a plugin to save the state when reloading the page
  plugins: [createPersistedState(
    {
      paths:[
        'savedContactList',
        'selectedContact',
        'savedFieldArr',
        'savedValueArr',
        'savedPreviousField',
        'savedPreviousValue',
        'editedNewField',
        'editedNewValue',
        'changedLastField',
        'changedLastValue'
      ]
    }
  )],
})

export default store;
