<style>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <header-con></header-con>
        <side-con></side-con>
        <Layout>
            <Layout>
                <Layout :style="{marginLeft: '220px'}">
                    <crumb-con></crumb-con>
                    <Content :style="{padding: '24px', minHeight: '100vh', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import headerCon from '@/components/header'
import sideCon from '@/components/sider'
import crumbCon from '@/components/crumb'
export default {
    components: {
        headerCon,
        sideCon,
        crumbCon
    }
}
</script>