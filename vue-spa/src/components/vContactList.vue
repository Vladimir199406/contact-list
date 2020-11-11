<template>
  <div>
    <h1>Список контактов</h1>
    <!--<vContactUser/>-->
    <button v-on:click="buttonIsPressedChangeToActive">Добавить новый контакт</button>
    <div v-if="buttonIsPressed === true">
      <input v-model="tagInputContent" type="text" placeholder="Имя нового контакта">
      <span v-if="tagInputContent.length != 0" v>
        <button v-on:click="buttonIsPressedChangeToNotActive">Сохранить контакт</button>
      </span>
    </div>
    <span v-if="newSavedContact.length != 0">
        <p>{{newSavedContact}}</p>
    </span>
  </div>
</template>

<script>
import vContactUser from "./vContactUser";

export default {
  name: "vContactList",
  components: {
    vContactUser
  },
  data(){
    return {
      buttonIsPressed: false,
      tagInputContent: '',
      newSavedContact: ''
    }
  },
  methods: {
    buttonIsPressedChangeToActive(){
      this.buttonIsPressed = true;
    },
    buttonIsPressedChangeToNotActive(){
      this.buttonIsPressed = false;
      console.log(this.tagInputContent);
      this.newSavedContact = this.tagInputContent;
    },
  }
}
</script>

<style scoped>
  div{
    color: whitesmoke;
    background-color: black;
  }
  button{
    cursor: pointer;
  }
  button:hover{
    background-color: #42b983;
    color: whitesmoke;
  }
</style>
