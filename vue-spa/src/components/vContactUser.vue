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
      <div>

      </div>
    </div>
    <router-link to="/"><button class="toContactListButton">Скрыть информацию о контакте</button></router-link>

    <div id="unitedList">
      <div class="row_one">
        <nav>
          <ul v-for="(fieldValue, indexFieldValue) in this.FIELD_ARRAY">
            <li>
              <span>
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

      <div class="row_two">
        <nav>
          <ul v-for="(fieldValue, indexFieldValue) in this.VALUE_ARRAY">
            <li>
              <span>
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
              <button v-on:click="cancelEditFields(indexFieldValue)" class="cancelEditButton" hidden="true">Отменить редактирование</button>
              <button v-on:click="сonfirmCancelEditing(indexFieldValue)" class="сonfirmCancelEditButton" hidden="true">Подтвердить отмену редактирования</button>
              <button v-on:click="saveChanges(indexFieldValue)" class="saveChangesButton" hidden="true">Сохранить изменения</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    Массивы:
    <div>{{this.FIELD_ARRAY}}</div>
    <div>{{this.VALUE_ARRAY}}</div>
    Текущие значения эл массивов во врем переменных:
    <div>{{this.SAVED_PREVIOUS_FIELD}}</div>
    <div>{{this.SAVED_PREVIOUS_VALUE}}</div>
    ИНПУТЫ КОТОРЫЕ ПЕРЕЗАПИШУТ ЭЛЕМЕНТЫ МАССИВА:
    <div>ПОЛЕ  {{this.tempInputField}}{{this.EDITED_FIELD}}</div>
    <div>ЗНАЧЕНИЕ  {{this.tempInputValue}}{{this.EDITED_VALUE}}</div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "vContactUser",
  data(){
    return {
      buttonOfAddingFieldValueIsPressed: false,
      tagInputField: '',
      tagInputValue: '',
      tempInputField: '',
      tempInputValue: ''
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
      'EDITED_VALUE'
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
      'EDIT_VALUE'

    ]),
    addFieldValue(){
      document.getElementById("addingFieldValueButton").hidden = true;
      this.buttonOfAddingFieldValueIsPressed = true;
    },
    saveNewFieldValue(){
      this.buttonOfAddingFieldValueIsPressed = false;
      document.getElementById("addingFieldValueButton").hidden = false;
      this.ADD_FIELD(this.tagInputField);
      this.ADD_VALUE(this.tagInputValue);
      console.log(this.tagInputField);
    },
    startDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = true;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = false;
      document.getElementsByClassName("cancelConfirmDeleteButton")[index].hidden = false;
      document.getElementsByClassName("editFieldsButton")[index].hidden = true;
    },
    confirmDeletion(index){
      this.DELETE_FIELD_FROM_FIELD_ARRAY(index);
      this.DELETE_VALUE_FROM_VALUE_ARRAY(index);
    },
    cancelConfirmDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = false;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = true;
      document.getElementsByClassName("cancelConfirmDeleteButton")[index].hidden = true;
      document.getElementsByClassName("editFieldsButton")[index].hidden = false;
    },
    editFields(index){
      document.getElementsByClassName("editFieldsButton")[index].hidden = true;
      document.getElementsByClassName("deleteButton")[index].hidden = true;
      document.getElementsByClassName("cancelEditButton")[index].hidden = false;
      document.getElementsByClassName("inputValueToEdit")[index].hidden = false;
      document.getElementsByClassName("inputFieldToEdit")[index].hidden = false;
      document.getElementsByClassName("saveChangesButton")[index].hidden = false;
    },
    cancelEditFields(index){
      document.getElementsByClassName("cancelEditButton")[index].hidden = true;
      document.getElementsByClassName("сonfirmCancelEditButton")[index].hidden = false;
    },
    сonfirmCancelEditing(index){
      document.getElementsByClassName("сonfirmCancelEditButton")[index].hidden = true;
      document.getElementsByClassName("deleteButton")[index].hidden = false;
      document.getElementsByClassName("editFieldsButton")[index].hidden = false;
      document.getElementsByClassName("inputValueToEdit")[index].hidden = true;
      document.getElementsByClassName("inputFieldToEdit")[index].hidden = true;
      document.getElementsByClassName("saveChangesButton")[index].hidden = true;
    },
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
      this.EDIT_FIELD(index)
      this.EDIT_VALUE(index)
    }
  }
}

</script>

<style scoped>
div{
  color: whitesmoke;
  font-size: smaller;
}
button{
  cursor: pointer;
}
button:hover{
  background-color: #42b983;
  color: whitesmoke;
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
  color: black;
  font-weight: bold;
  border: 0.2rem dotted darkolivegreen;
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
#unitedList{
  display: flex;
  flex-direction: row;
}
</style>
