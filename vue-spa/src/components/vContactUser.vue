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
    </div>
    <router-link to="/"><button class="toContactListButton">Скрыть информацию о контакте</button></router-link>

    <div id="unitedList">
      <div class="row_one">
        <nav>
          <ul v-for="(fieldValue, indexFieldValue) in this.FIELD_ARRAY">
            {{fieldValue}}
            <li v-for="(fieldInnerValue, indexInnerFieldValue) in innerArrayElementField(indexFieldValue)">
              {{indexInnerFieldValue + 1}}: {{fieldInnerValue}}
            </li>
          </ul>
        </nav>
      </div>

      <div class="row_two">
        <nav>
          <ul v-for="(fieldValue, indexFieldValue) in this.VALUE_ARRAY">
            {{fieldValue}}
            <li v-for="(fieldInnerValue, indexInnerFieldValue) in innerArrayElementValue(indexFieldValue)">
              {{indexInnerFieldValue + 1}}: {{fieldInnerValue}}
            </li>
          </ul>
        </nav>
      </div>
    </div>

    {{this.FIELD_ARRAY}}
    {{this.VALUE_ARRAY}}
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
    }
  },
  computed: {
    ...mapGetters([
      'SELECTED_CONTACT',
      'FIELD_ARRAY',
      'VALUE_ARRAY'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_FIELD',
      'ADD_VALUE'
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
    innerArrayElementField(indexFieldValue){
      console.log(this.FIELD_ARRAY);
      return this.FIELD_ARRAY[indexFieldValue]
    },
    innerArrayElementValue(indexFieldValue){
      console.log(this.VALUE_ARRAY);
      return this.FIELD_ARRAY[indexFieldValue]
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
#unitedList{
  display: flex;
  flex-direction: row;
}
</style>
