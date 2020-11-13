<template>
  <div>
    <h1>Информация о контакте</h1>
    <router-link to="/contact-list"><button>Скрыть информацию о контакте</button></router-link>
  </div>
</template>

<script>
export default {
  name: "vContactUser",
  data(){
    return {
      buttonOfAddingIsPressed: false,
      tagInputContent: '',
      savedContactList: [],
    }
  },
  methods: {}
}

</script>

<style scoped>
div{
  color: brown;
  font-size: smaller;
}
</style>
