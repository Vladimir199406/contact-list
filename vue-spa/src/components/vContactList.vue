<template>
  <div>
    <h1>Список контактов</h1>

    <!--ADD new contact BELOW-->
    <button v-on:click="addContact" id="addingButton">Добавить новый контакт</button>
    <!--ADD new contact ABOVE-->

    <div v-if="buttonOfAddingIsPressed === true">
      <input v-model="tagInputContent" type="text" placeholder="Имя нового контакта">

      <!--NEW contact SAVES only if input got length BELOW-->
      <span v-if="tagInputContent.length != 0">
        <button v-on:click="saveNewContact">Сохранить контакт</button>
      </span>
      <!--NEW contact SAVES only if input got length ABOVE-->
    </div>

    <!--BLOCK with LIST and methods BELOW-->
    <span >
        <ul v-for="(contact, index) in this.LIST_OF_CONTACTS" v-bind:key="contact">
          <li>
            {{index + 1}}: {{contact}}
            <button v-on:click="startDeletion(index)" class="deleteButton">Удалить</button>
            <button v-on:click="confirmDeletion(index)" class="confirmDeleteButton" hidden="true">Подтвердить</button>
            <button v-on:click="cancelConfirmDeletion(index)" class="cancelConfirmDeleteButton" hidden="true">Отменить удаление</button>
            <router-link to="/contact-list/user-info">
              <button v-on:click="getInfoAboutSelectedContact(index)">Информация о {{contact}}</button>
            </router-link>
          </li>
        </ul>
    </span>
    <!--BLOCK with LIST and methods ABOVE-->

  </div>
</template>

<script>
//importing VUEX state
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
    //ADDING contact BELOW
    addContact(){
      document.getElementById("addingButton").hidden = true;
      this.buttonOfAddingIsPressed = true;
    },
    //ADDING contact ABOVE

    //SAVE contact BELOW
    saveNewContact(){
      this.buttonOfAddingIsPressed = false;
      this.ADD_CONTACT_TO_LIST_OF_CONTACTS(this.tagInputContent);
      document.getElementById("addingButton").hidden = false;
    },
    //SAVE contact ABOVE

    //starts DELETE MECHANISM BELOW
    startDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = true;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = false;
      document.getElementsByClassName("cancelConfirmDeleteButton")[index].hidden = false;
    },
    //starts DELETE MECHANISM ABOVE

    //ends DELETE MECHANISM BELOW
    confirmDeletion(index){
      this.DELETE_CONTACT_FROM_LIST_OF_CONTACTS(index);
    },
    //ends DELETE MECHANISM ABOVE

    //cancel DELETION BELOW
    cancelConfirmDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = false;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = true;
      document.getElementsByClassName("cancelConfirmDeleteButton")[index].hidden = true;
    },
    //cancel DELETION ABOVE

    //taking CONTACT data(name) to vuex BELOW
    getInfoAboutSelectedContact(index){
      this.GET_INFO_ABOUT_SELECTED_CONTACT(index);
    }
    //taking CONTACT data(name) to vuex ABOVE
  }
}
</script>

<style scoped>
  #addingButton{
    background: lightgray;
    color: black;
  }
  #addingButton:hover{
    background-color: #42b983;
    color: whitesmoke;
  }
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
    border: 0.2rem dotted darkolivegreen;
    color: black;
    font-weight: bold;
  }
  .cancelConfirmDeleteButton{
    background: #42b983;
  }
  div{
    color: whitesmoke;
  }
  ul{
    text-align: left;
  }
  ul > li{
    margin: 0.3rem;
  }
</style>
