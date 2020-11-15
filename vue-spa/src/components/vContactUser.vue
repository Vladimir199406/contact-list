<template>
  <div>
    <h1>Информация о контакте   " {{this.SELECTED_CONTACT}} "</h1>
    <div class="mainInfoBlock">

    </div>
    <router-link to="/"><button>Скрыть информацию о контакте</button></router-link>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "vContactUser",
  data(){
    return {
      buttonOfAddingIsPressed: false,
      tagInputContent: '',
      savedContactList: [],
    }
  },
  computed: {
    ...mapGetters([
      'SELECTED_CONTACT'
    ])
  },
  methods: {}
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
mainInfoBlock{
  color: whitesmoke;
}
</style>
