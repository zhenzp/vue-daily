
<template>
    <div>
        <Poptip confirm title="您确认要增加1吗？" @on-ok="ok" @on-cancel="cancel">
            <Button type="success" long>加1</Button>
        </Poptip>
    </div>
</template>
<script>
import bus from '@/eventBus'
import axios from '@/axios'
// 引入untils
require('@/untils')
export default {
    data() {
        return {
        }
    },
    methods: {
        ok() {
            this.$Message.info('已经加1了！');
            this.$store.commit('changeName', new Date().Format("yyyy-MM-dd hh:mm:ss"))
        },
        cancel() {
            this.$Message.info('取消了哦！');
        }
    }
}
</script>
