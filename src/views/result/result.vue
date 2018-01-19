<template>
    <div>
        <h3>父组件接收参数：{{paramsData}}</h3>
        <params-con  v-on:formsubmit="searchFormSubmit"></params-con>
        <table-con></table-con>
    </div>
</template>
<script>
import bus from '@/eventBus'
import axios from '@/axios'
import paramsCon from './components/params'
import tableCon from './components/table'
export default {
    components: {
        paramsCon,
        tableCon
    },
    data() {
        return {
            paramsData: {}
        }
    },
    methods: {
        searchFormSubmit(search) {
            console.log('父组件，接收search-form中的emit触发submit事件，接收search数组：',search)
            this.paramsData={
                ...search
            }
        }
    },
    mounted() {
    }
}
</script>

