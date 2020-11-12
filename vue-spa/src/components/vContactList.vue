<template>
  <div>
    <h1>Список контактов</h1>
    <!--<vContactUser/>-->
    <button v-on:click="addContact" id="addingButton">Добавить новый контакт</button>
    <div v-if="buttonOfAddingIsPressed === true">
      <input v-model="tagInputContent" type="text" placeholder="Имя нового контакта">
      <span v-if="tagInputContent.length != 0">
        <button v-on:click="saveNewContact">Сохранить контакт</button>
      </span>
    </div>
    <span >
        <ul v-for="(contact, index) in savedContactList"
            v-bind:key="contact"
        >
          <li v-on:click="showModal" >{{index + 1}}: {{contact}} <button v-on:click="deleteContact(index)">Удалить контакт</button></li>
              <vOneModalWindow
                v-show="isModalVisible"
                v-on:close="closeModal"
              />
        </ul>
    </span>
  </div>
</template>

<script>
import vContactUser from "./vContactUser";
import vOneModalWindow from "./vOneModalWindow";

export default {
  name: "vContactList",
  components: {
    vContactUser,
    vOneModalWindow
  },
  data(){
    return {
      buttonOfAddingIsPressed: false,
      tagInputContent: '',
      savedContactList: [],
      isModalVisible: false,
    }
  },
  methods: {
    addContact(){
      document.getElementById("addingButton").hidden = true;
      this.buttonOfAddingIsPressed = true;
    },
    saveNewContact(){
      this.buttonOfAddingIsPressed = false;
      //console.log(this.tagInputContent);
      this.savedContactList.push(this.savedContactList[this.index] = this.tagInputContent);
      document.getElementById("addingButton").hidden = false;
    },
    deleteContact(index){
      this.savedContactList.splice(index, 1);
      //console.log(this.savedContactList.length);
      console.log(index);
      this.isModalVisible = false;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
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
