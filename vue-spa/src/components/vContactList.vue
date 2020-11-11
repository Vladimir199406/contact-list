<template>
  <div>
    <h1>Список контактов</h1>
    <!--<vContactUser/>-->
    <button v-on:click="buttonOfAddingIsPressedChangeToActive" id="addingButton">Добавить новый контакт</button>
    <div v-if="buttonOfAddingIsPressed === true">
      <input v-model="tagInputContent" type="text" placeholder="Имя нового контакта">
      <span v-if="tagInputContent.length != 0">
        <button v-on:click="buttonOfAddingIsPressedChangeToNotActive">Сохранить контакт</button>
      </span>
    </div>
    <span v-if="savedContactList.length != 0">
        <ul v-for="(contact, index) in savedContactList"
            v-bind:key="contact"
        >
          <li>{{index + 1}}: {{contact}}</li>
        </ul>
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
      buttonOfAddingIsPressed: false,
      tagInputContent: '',
      savedContactList: [],
      contactsCounter: 0
    }
  },
  methods: {
    buttonOfAddingIsPressedChangeToActive(){
      document.getElementById("addingButton").hidden = true;
      this.buttonOfAddingIsPressed = true;
    },
    buttonOfAddingIsPressedChangeToNotActive(){
      this.buttonOfAddingIsPressed = false;
      console.log(this.tagInputContent);
      this.savedContactList[this.contactsCounter] = this.tagInputContent;
      this.contactsCounter++;
      document.getElementById("addingButton").hidden = false;
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
  ul{
    text-align: left;
  }
</style>
