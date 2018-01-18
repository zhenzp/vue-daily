<style lang="less" scoped>

</style>

<template>
    <Sider hide-trigger :style="{position: 'fixed', height: '100%', left: 0, overflow: 'auto'}">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select='change'>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </template>
                <MenuItem name="userInfo">
                    table
                </MenuItem>
                <MenuItem name="add">
                    加一
                </MenuItem>
                <MenuItem name="show">
                    加一效果
                </MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </template>
                <MenuItem name="result">查询</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    iview
                </template>
                <MenuItem name="upload">upload上传</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>
<script>
export default {
    methods: {
        change(name) {
            this.$router.push(
                {
                    name: name
                }
            )
        }
    }
}
</script>

