<template>
    <div>
        <input type="text" v-model="params.age">
        <br>
        <input type="text" v-model="params.sex">
        <br>
        <input type="button" value="搜索" @click="search">
    </div>
</template>
<script>
import bus from '@/eventBus'
export default {
    data() {
        return {
            params:{
                age: 18,
                sex: 0
            }
        }
    },
    methods: {
        search() {
            console.log(this.params)
            bus.$emit('formsubmitBus',this.params);
        }
    }
}
</script>
