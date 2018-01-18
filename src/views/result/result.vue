<template>
    <div>
        <params>
            </params/>
            <h2>{{paramsData}}</h2>
            <Row style="background:#eee">
                <Col span='11' offset='1' v-for="item in imageData" :key="item.id">
                <div style="padding: 20px">
                    <Card>
                        <p slot="title">标题：{{item.title}}</p>
                        <p>作者：{{item.name}}</p>
                        <p>描述：{{item.text}}</p>
                        <div style="textAlign:center;marginTop:20px">
                            <img :src="item.url" :alt="item.name">
                        </div>
                    </Card>
                </div>
                </Col>
            </Row>
    </div>
</template>
<script>
import bus from '@/eventBus'
import axios from '@/axios'
import params from './components/params'
export default {
    components: {
        params,
    },
    data() {
        return {
            paramsData: {
                name: '',
                sex: '',
                text: ''
            },
            imageData: []
        }
    },
    methods: {
        showParams() {
            let _this = this
            bus.$on('formsubmitBus', function(params) {
                _this.paramsData = params
                _this.getData()
            });
        },
        getData() {
            let _this = this;
            axios("/news/image", 'type=top&key=123456')
                .then(res => {
                    console.log('mock', res)
                    _this.imageData = res.images;
                });
        }
    },
    mounted() {
        this.showParams()
    }
}
</script>

