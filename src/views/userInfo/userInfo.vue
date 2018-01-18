<template>
    <div>
        <div>
            <Table stripe :columns="columns" :data="userData"></Table>
            <Row style="margin:10px 0">
                <Col style="float:right">
                <Page :total="100" :current="1" show-total show-sizer show-elevator @on-change="changePage" @on-page-size-change="changePageSize" :page-size-opts="[10,50,100,200]"></Page>
                </Col>
            </Row>
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
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '取消订阅')
                        ]);
                    }
                }
            ]
        }
    },
    methods: {
        // 获取数据
        getData() {
            let _this = this;
            axios("/news/index", 'type=top&key=123456')
                .then(res => {
                    console.log('mock', res)
                    _this.userData = res.articles;
                });
        },
        // 详细页
        show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.userData[index].author_name}<br>Age：${this.userData[index].title}<br>Address：${this.userData[index].email}`
            })
        },
        // 删除
        remove(index) {
            this.userData.splice(index, 1);
        },
        // 分页切换
        changePage(page) {
            console.log('page', page)
        },
        // 页码数切换
        changePageSize(pagesize) {
            console.log('pagesize', pagesize)
        }
    },
    mounted() {
        this.getData()
    }
}
</script>
