<template>
    <Row :gutter="16">
        <Col span="6" offset='8'>
        <div>
            <h1>Welcome To JD!!!</h1>
            <br>
            <div>
                <img src="@/assets/logo.png" alt="" :style="{width:'200px',height:'200px'}">
            </div>
        </div>
        </Col>
    </Row>
</template>
<script>
export default {
    methods: {
        changeCrumb() {
            this.$store.commit('changePath', 'welcome')
        }
    },
    mounted() {
        this.changeCrumb()
    }
}
</script>