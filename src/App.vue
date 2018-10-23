<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
input{
  outline: none;
  background: none;
  border: none;
}
a{
  text-decoration: none;
  color: black;
}
ul{
  list-style: none;
}
</style>
