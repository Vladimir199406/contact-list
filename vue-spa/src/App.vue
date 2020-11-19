<template>
  <keep-alive>
    <div id="app">
      <img src="./assets/logo.jpg">
      <div class="mainWrapper">
        <!--to display the component using router view-->
        <router-view></router-view>
      </div>
    </div>
  </keep-alive>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: 'Big Shoulders Inline Display', cursive;
  text-align: center;
  margin-top: 2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button{
  border-radius: 0.3rem;
  font-family: 'Big Shoulders Inline Display', cursive;
  font-weight: 600;
  padding: 0.5rem;
}

button:hover{
  border: 0.2rem dotted #3a7999;
}

button:active{
  box-shadow: 0 0.1rem 0 #00823F;
  bottom:-4px;
}
h1, h2 {
  color: #1f0909;
  font-weight: 600;
  text-shadow: 0.1rem 0.1rem 0.2rem black, 0 0 1em white;
}
img{
  width: 17rem;
}
input{
  border-radius: 0.4rem;
  height: 1.5rem;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 2rem;
}
.mainWrapper{
  background: rgb(25,25,25);
  background: linear-gradient(90deg, rgba(25,25,25,1) 0%, rgba(41,40,40,1) 11%, rgba(149,149,149,1) 100%);
  border-radius: 0.5rem;
  margin: 1rem;
  margin-bottom: 5rem;
  padding: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
