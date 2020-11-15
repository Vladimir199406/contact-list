<template>
  <keep-alive>
    <div id="app">
      <img src="./assets/logo.jpg">
      <div class="mainWrapper">
        <router-view></router-view>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import vContactList from './components/vContactList'

export default {
  name: 'app',
  components: {
    vContactList,
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mainWrapper{
  background-color: black;
  border-radius: 0.5rem;
  margin: 1rem;
  margin-bottom: 5rem;
  padding: 1rem;
}
img{
  width: 17rem;
}
h1, h2 {
  color: navajowhite;
  font-weight: normal;
}

button{
  border-radius: 0.3rem;
}

button:hover{
  border: 0.2rem dotted #3a7999;
}

button:active{
  box-shadow: 0 1px 0 #00823F;
  bottom:-4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
