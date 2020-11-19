<template>
  <div>
    <h1>Информация о контакте   " {{this.SELECTED_CONTACT}} "</h1>
    <div class="mainInfoBlock">
      <button v-on:click="addFieldValue" id="addingFieldValueButton">Добавить новое поле / значение</button>
      <div v-if="buttonOfAddingFieldValueIsPressed === true">
        <input v-model="tagInputField" type="text" placeholder="Поле">
        <input v-model="tagInputValue" type="text" placeholder="Значение поля">
        <span v-if="tagInputField.length != 0 && tagInputValue.length != 0">
          <button v-on:click="saveNewFieldValue">Сохранить поле / значение</button>
        </span>
      </div>
      <!--CANCEL change BELOW-->
      <div>
          <span v-if="this.SAVED_PREVIOUS_VALUE != '' && this.VALUE_ARRAY.length != 0">
            <button v-on:click="cancelLastChangeFieldValue" class="cancelLastChange">Отменить последнее изменение</button>
          </span>
      </div>
      <!--CANCEL change ABOVE-->
    </div>

    <!--back to CONTACT LIST BELOW-->
    <router-link to="/"><button class="toContactListButton">Скрыть информацию о контакте</button></router-link>
    <!--back to CONTACT LIST ABOVE-->

    <div id="unitedList">

      <!--LIST of FIELDS BELOW-->
      <div class="row_one">
        <nav>
          <ul v-for="(fieldValue, indexFieldValue) in this.FIELD_ARRAY">
            <li>
              <span class="returningPreviousField">
                {{fieldValue}}
              </span>
              <input v-model="tempInputField"
                     type="text"
                     class="inputFieldToEdit"
                     hidden="true"
                     placeholder="Замена имени поля"
              >
            </li>
          </ul>
        </nav>
      </div>
      <!--LIST of FIELDS ABOVE-->

      <!--LIST of VALUES AND BUTTONS WITH METHODS BELOW-->
      <div class="row_two">
        <nav>
          <ul v-for="(fieldValue, indexFieldValue) in this.VALUE_ARRAY">
            <li>
              <span class="returningPreviousValue">
                {{fieldValue}}
              </span>
              <input v-model="tempInputValue"
                     type="text"
                     class="inputValueToEdit"
                     hidden="true"
                     placeholder="Замена значения поля"
              >
              <button v-on:click="startDeletion(indexFieldValue)" class="deleteButton">Удалить </button>
              <button v-on:click="confirmDeletion(indexFieldValue)" class="confirmDeleteButton" hidden="true">Подтвердите</button>
              <button v-on:click="cancelConfirmDeletion(indexFieldValue)" class="cancelConfirmDeleteButton" hidden="true">Отменить удаление</button>
              <button v-on:click="editFields(indexFieldValue)" class="editFieldsButton" >Редактировать</button>
              <button v-on:click="cancelEditFields(indexFieldValue)" class="cancelEditButton" hidden="true">Отменить</button>
              <button v-on:click="сonfirmCancelEditing(indexFieldValue)" class="сonfirmCancelEditButton" hidden="true">Подтвердить отмену</button>
              <button v-on:click="saveChanges(indexFieldValue)" class="saveChangesButton" hidden="true">Сохранить</button>
            </li>
          </ul>
        </nav>
      </div>
      <!--LIST of VALUES AND BUTTONS WITH METHODS ABOVE-->

    </div>
  </div>
</template>

<script>
//import state from VUEX
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "vContactUser",
  data(){
    return {
      buttonOfAddingFieldValueIsPressed: false,
      tagInputField: '',
      tagInputValue: '',
      tempInputField: '',
      tempInputValue: '',
      indexKeyToCancelChange: 1
    }
  },
  computed: {
    ...mapGetters([
      'SELECTED_CONTACT',
      'FIELD_ARRAY',
      'VALUE_ARRAY',
      'SAVED_PREVIOUS_FIELD',
      'SAVED_PREVIOUS_VALUE',
      'EDITED_FIELD',
      'EDITED_VALUE',
      'CANCELED_LAST_CHANGED_FIELD',
      'CANCELED_LAST_CHANGED_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_FIELD',
      'ADD_VALUE',
      'DELETE_FIELD_FROM_FIELD_ARRAY',
      'DELETE_VALUE_FROM_VALUE_ARRAY',
      'SAVE_PREVIOUS_FIELD',
      'SAVE_PREVIOUS_VALUE',
      'EDIT_FIELD',
      'EDIT_VALUE',
      'CANCEL_LAST_CHANGE_FIELD',
      'CANCEL_LAST_CHANGE_VALUE'

    ]),
    //conditions TO show SAVE button BELOW
    addFieldValue(){
      document.getElementById("addingFieldValueButton").hidden = true;
      this.buttonOfAddingFieldValueIsPressed = true;
    },
    //conditions TO show SAVE button ABOVE

    //SAVE new FIELD AND VALUE BELOW
    saveNewFieldValue(){
      this.buttonOfAddingFieldValueIsPressed = false;
      document.getElementById("addingFieldValueButton").hidden = false;
      this.ADD_FIELD(this.tagInputField);
      this.ADD_VALUE(this.tagInputValue);
      console.log(this.tagInputField);
    },
    //SAVE new FIELD AND VALUE ABOVE

    //conditions to DELETE field / value BELOW
    startDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = true;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = false;
      document.getElementsByClassName("cancelConfirmDeleteButton")[index].hidden = false;
      document.getElementsByClassName("editFieldsButton")[index].hidden = true;
    },
    //conditions to DELETE field / value ABOVE

    //DELETE field / value BELOW
    confirmDeletion(index){
      this.DELETE_FIELD_FROM_FIELD_ARRAY(index);
      this.DELETE_VALUE_FROM_VALUE_ARRAY(index);
    },
    //DELETE field / value ABOVE

    //CANCEL DELETE field / value BELOW
    cancelConfirmDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = false;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = true;
      document.getElementsByClassName("cancelConfirmDeleteButton")[index].hidden = true;
      document.getElementsByClassName("editFieldsButton")[index].hidden = false;
    },
    //CANCEL DELETE field / value ABOVE

    //EDIT field / value BELOW
    editFields(index){
      document.getElementsByClassName("editFieldsButton")[index].hidden = true;
      document.getElementsByClassName("deleteButton")[index].hidden = true;
      document.getElementsByClassName("cancelEditButton")[index].hidden = false;
      document.getElementsByClassName("inputValueToEdit")[index].hidden = false;
      document.getElementsByClassName("inputFieldToEdit")[index].hidden = false;
      document.getElementsByClassName("saveChangesButton")[index].hidden = false;
    },
    //EDIT field / value ABOVE

    //CANCEL EDIT field / value BELOW
    cancelEditFields(index){
      document.getElementsByClassName("cancelEditButton")[index].hidden = true;
      document.getElementsByClassName("сonfirmCancelEditButton")[index].hidden = false;
    },
    //CANCEL EDIT field / value ABOVE

    //CONFIRM CANCEL EDIT field / value BELOW
    сonfirmCancelEditing(index){
      document.getElementsByClassName("сonfirmCancelEditButton")[index].hidden = true;
      document.getElementsByClassName("deleteButton")[index].hidden = false;
      document.getElementsByClassName("editFieldsButton")[index].hidden = false;
      document.getElementsByClassName("inputValueToEdit")[index].hidden = true;
      document.getElementsByClassName("inputFieldToEdit")[index].hidden = true;
      document.getElementsByClassName("saveChangesButton")[index].hidden = true;
    },
    //CONFIRM CANCEL EDIT field / value ABOVE

    //SAVE changes BELOW
    saveChanges(index){
      document.getElementsByClassName("saveChangesButton")[index].hidden = true;
      document.getElementsByClassName("сonfirmCancelEditButton")[index].hidden = true;
      document.getElementsByClassName("deleteButton")[index].hidden = false;
      document.getElementsByClassName("editFieldsButton")[index].hidden = false;
      document.getElementsByClassName("inputValueToEdit")[index].hidden = true;
      document.getElementsByClassName("inputFieldToEdit")[index].hidden = true;
      document.getElementsByClassName("cancelEditButton")[index].hidden = true;
      this.SAVE_PREVIOUS_FIELD(index);
      this.SAVE_PREVIOUS_VALUE(index);
      this.EDIT_FIELD(index);
      this.EDIT_VALUE(index);
      this.indexKeyToCancelChange = index;
    },
    //SAVE changes ABOVE

    //CANCEL LAST CHANGE BELOW
    cancelLastChangeFieldValue() {
      let index = this.indexKeyToCancelChange;
      this.CANCEL_LAST_CHANGE_FIELD(index);
      this.CANCEL_LAST_CHANGE_VALUE(index);
    }
    //CANCEL LAST CHANGE ABOVE

  }
}

</script>

<style scoped>
button{
  cursor: pointer;
}
button:hover{
  background-color: #42b983;
  color: whitesmoke;
}
.confirmDeleteButton{
  background: brown;
  color: white;
}
.confirmDeleteButton:hover{
  background: brown;
  color: black;
  font-weight: bold;
  border: 0.2rem dotted darkolivegreen;
}
.cancelConfirmDeleteButton{
  background: #42b983;
}
.cancelLastChange{
  margin-top: 1rem;
}
div{
  color: whitesmoke;
  font-size: smaller;
}
.mainInfoBlock{
  color: whitesmoke;
}
.toContactListButton{
  background: brown;
  color: white;
  margin-top: 1rem;
}
.toContactListButton:hover{
  background: brown;
  border: 0.2rem dotted darkolivegreen;
  color: black;
  font-weight: bold;
}
#unitedList{
  display: flex;
  flex-direction: row;
}
</style>
