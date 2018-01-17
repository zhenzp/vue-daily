
<template>
    <div>
        <input type="button" value="change" @click="change">
        <br>
        <input type="button" value="axios" @click="getData">
        <br>
        <b>{{params}}</b>
    </div>
</template>
<script>
import bus from '@/eventBus'
import axios from '@/axios'
export default {
    data() {
        return {
            params: {
                age1: 18,
                sex1: 1
            }
        }
    },
    methods: {
        change() {
            console.log('click', 11)
            this.$store.commit('changeName', "gogogogo")
        },
        showParams() {
            let _this = this
            bus.$on('formsubmitBus', function(params) {
                console.log('other', params)
                console.log('this', _this.params)
                _this.params = {
                    ..._this.params,
                    age1: params.age,
                    sex1: params.sex
                }
            });
        },
        getData() {
            console.log(axios)
            axios("/news/index", 'type=top&key=123456')
                .then(data => {
                    console.log('mock', data)
                });
        }
    },
    mounted() {
        this.showParams()
    }
}
</script>
