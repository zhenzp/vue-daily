<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <get></get>
  </div>
</template>

<script>
import get from './get';
export default {
  components: {
    get
  },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
