<template>
    <div>
        <h1>改变值：{{count}}</h1>
        <h1>改变值：{{countAlias}}</h1>
        <h1>改变值：{{countPlusLocalState}}</h1>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      localCount: 100
    };
  },
//   computed: {
//     author() {
//       return this.$store.state.name;
//     }
//   },
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.name,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'name',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
      return state.name + this.localCount;
    }
  })
};
</script>
