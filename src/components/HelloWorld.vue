<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{author}}</h2>
    <test></test>
    <show></show>
    <params></params>
    <userInfo></userInfo>
  </div>
</template>

<script>
import test from './test';
import show from './show';
import userInfo from '@/views/userInfo/userInfo';
import params from './params';
export default {
  components: {
    test,
    show,
    params,
    userInfo
  },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    author() {
      return this.$store.state.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  background: #ccc;
}
h1,
h2 {
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
