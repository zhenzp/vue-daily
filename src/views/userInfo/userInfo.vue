<template>
    <div>
        <div>
            <Table stripe :columns="columns" :data="userData"></Table>
        </div>
    </div>
</template>
<script>
import axios from '@/axios'
export default {
    data() {
        return {
            userData: [],
            columns: [
                {
                    title: '作者',
                    key: 'author_name',
                    width: 100
                },
                {
                    title: '标题',
                    key: 'title',
                    width: 100
                },
                {
                    title: '邮箱',
                    key: 'email',
                    width: 200
                },
                {
                    title: '内容',
                    key: 'text',
                    width: 500
                },
                {
                    title: '开始时间',
                    key: 'start_date'
                },
                {
                    title: '结束时间',
                    key: 'end_date'
                }
            ]
        }
    },
    methods: {
        getData() {
            let _this = this;
            axios("/news/index", 'type=top&key=123456')
                .then(res => {
                    console.log('mock', res)
                    _this.userData = res.articles;
                });
        }
    },
    mounted() {
        this.getData()
    }
}
</script>
