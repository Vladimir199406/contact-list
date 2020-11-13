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
        <ul v-for="(contact, index) in savedContactList" v-bind:key="contact">
          <li>
            {{index + 1}}: {{contact}}
            <button v-on:click="startDeletion(index)" class="deleteButton">Удалить контакт</button>
            <button v-on:click="confirmDeletion(index)" class="confirmDeleteButton" hidden="true">Подтвердите удаление контакта</button>
            <router-link to="/contact-list/user-info"><button>Информация о контакте {{contact}}</button></router-link>
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
      tagInputContent: '',
      savedContactList: [],
    }
  },
  computed: {
    ...mapGetters([
      'LIST_OF_CONTACTS'
    ])
  },
  methods: {
    ...mapActions([
      'CHANGE_LIST_OF_CONTACTS'
    ]),
    addContact(){
      document.getElementById("addingButton").hidden = true;
      this.buttonOfAddingIsPressed = true;
    },

    saveNewContact(){
      this.buttonOfAddingIsPressed = false;
      //console.log(this.tagInputContent);
      this.LIST_OF_CONTACTS().push(this.savedContactList[this.index] = this.tagInputContent);
      this.savedContactList.push(this.savedContactList[this.index] = this.tagInputContent);
      document.getElementById("addingButton").hidden = false;
    },
    startDeletion(index){
      document.getElementsByClassName("deleteButton")[index].hidden = true;
      document.getElementsByClassName("confirmDeleteButton")[index].hidden = false;
    },
    confirmDeletion(index){
      this.savedContactList.splice(index, 1);
      //console.log(this.savedContactList.length);
      console.log(index);
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
