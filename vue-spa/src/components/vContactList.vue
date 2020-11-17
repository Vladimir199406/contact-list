<template>
  <div>
    <h1>Список контактов</h1>
    <button v-on:click="addContact" id="addingButton">Добавить новый контакт</button>
    <div v-if="buttonOfAddingIsPressed === true">
      <input v-model="tagInputContent" type="text" placeholder="Имя нового контакта">
      <span v-if="tagInputContent.length != 0">
        <button v-on:click="saveNewContact">Сохранить контакт</button>
      </span>
    </div>
    <span >
        <ul v-for="(contact, index) in this.LIST_OF_CONTACTS" v-bind:key="contact">
          <li>
            {{index + 1}}: {{contact}}
            <button v-on:click="startDeletion(index)" class="deleteButton">Удалить</button>
            <button v-on:click="confirmDeletion(index)" class="confirmDeleteButton" hidden="true">Подтвердить</button>
            <button v-on:click="cancelConfirmDeletion(index)" class="cancelConfirmDeleteButton" hidden="true">Отменить удаление</button>
            <router-link to="/contact-list/user-info">
              <button v-on:click="getInfoAboutSelectedContact(index)">Информация о контакте {{contact}}</button>
            </router-link>
          </li>
        </ul>
    </span>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "vContactList",
  components: {},
  data(){
    return {
      buttonOfAddingIsPressed: false,
      tagInputContent: ''
    }
  },
  computed: {
    ...mapGetters([
      'LIST_OF_CONTACTS',
      'SELECTED_CONTACT'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_CONTACT_TO_LIST_OF_CONTACTS',
      'DELETE_CONTACT_FROM_LIST_OF_CONTACTS',
      'GET_INFO_ABOUT_SELECTED_CONTACT'
    ]),
    addContact(){
      document.getElementById("addingButton").hidden = true;
      this.buttonOfAddingIsPressed = true;
    },

    saveNewContact(){
      this.buttonOfAddingIsPressed = false;
      //console.log(this.tagInputContent);
      this.ADD_CONTACT_TO_LIST_OF_CONTACTS(this.tagInputContent);
      //this.savedContactList.push(this.savedContactList[this.index] = this.tagInputContent);
      document.getElementById("addingButton").hidden = false;
      console.log(this.LIST_OF_CONTACTS);
    },
    startDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = true;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = false;
      document.getElementsByClassName("cancelConfirmDeleteButton")[index].hidden = false;
    },
    confirmDeletion(index){
      this.DELETE_CONTACT_FROM_LIST_OF_CONTACTS(index);
      //console.log(this.savedContactList.length);
      console.log(index);
    },
    cancelConfirmDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = false;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = true;
      document.getElementsByClassName("cancelConfirmDeleteButton")[index].hidden = true;
    },
    getInfoAboutSelectedContact(index){
      this.GET_INFO_ABOUT_SELECTED_CONTACT(index);
    }
  }
}
</script>

<style scoped>
  div{
    color: whitesmoke;
  }
  button{
    cursor: pointer;
  }
  #addingButton{
    color: black;
    background: lightgray;
  }
  #addingButton:hover{
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
  button:hover{
    background-color: #42b983;
    color: whitesmoke;
  }
  ul{
    text-align: left;
  }
  ul > li{
    margin: 0.3rem;
  }
</style>
