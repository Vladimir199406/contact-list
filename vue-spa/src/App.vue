<template>
  <div id="app">
    <img src="./assets/logo.jpg">
    <div>
      <vContactList/>
    </div>
  </div>
</template>

<script>
import vContactList from './components/vContactList'

export default {
  name: 'app',
  components: {
    vContactList
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 17rem;
}
h1, h2 {
  font-weight: normal;
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
