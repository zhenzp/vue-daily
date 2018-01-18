<template>
  <div id="app" class="app-main">
    <div class="layout">
      <header-con></header-con>
      <side-con></side-con>
      <Layout>
        <Layout>
          <Layout :style="{marginLeft: '220px'}">
            <crumb-con></crumb-con>
            <Content :style="{padding: '24px 24px 0', height: '600px', background: '#fff', overflowY:'auto'}">
              <router-view/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
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
  },
  name: 'App'
}
</script>


<style>
html,
body {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow: hidden;
}

.app-main {
  width: 100%;
  height: 100%;
}

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
