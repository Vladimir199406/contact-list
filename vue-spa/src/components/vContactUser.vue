<template>
  <div>
    <h1>Информация о контакте   " {{this.SELECTED_CONTACT}} "</h1>
    <div class="mainInfoBlock">
      <button v-on:click="addFieldValue" id="addingFieldValueButton">Добавить новое поле / значение</button>

      <div v-if="buttonOfAddingFieldValueIsPressed === true">
        <input v-model="tagInputField" type="text" placeholder="Поле контакта">
        <input v-model="tagInputValue" type="text" placeholder="Значение поля">
        <span v-if="tagInputField.length != 0 && tagInputValue.length != 0">
          <button v-on:click="saveNewFieldValue">Сохранить поле / значение</button>
        </span>
      </div>


      <span >
        <ul v-for="(field, value, indexFieldValue) in this.FIELD_VALUE_ARRAY" v-bind:key="field">
          <li>
            {{indexFieldValue + 1}}: {{field}} / {{value}}
          </li>
        </ul>
    </span>

      <h1>{{this.FIELD_VALUE_ARRAY}}</h1>

    </div>
    <router-link to="/"><button class="toContactListButton">Скрыть информацию о контакте</button></router-link>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "vContactUser",
  data(){
    return {
      buttonOfAddingFieldValueIsPressed: false,
      tagInputField: '',
      tagInputValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'SELECTED_CONTACT',
      'FIELD_VALUE_ARRAY'
    ])
  },
  methods: {
    addFieldValue(){
      document.getElementById("addingFieldValueButton").hidden = true;
      this.buttonOfAddingFieldValueIsPressed = true;
    },
    saveNewFieldValue(){
      this.buttonOfAddingFieldValueIsPressed = false;
      document.getElementById("addingFieldValueButton").hidden = false;
    },
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
</style>
