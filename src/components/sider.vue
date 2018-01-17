<template>
    <Sider hide-trigger :style="{position: 'fixed', height: '100%', left: 0, overflow: 'auto'}">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </template>
                <MenuItem name="1-1"><router-link :to="'/test'">test</router-link></MenuItem>
                <MenuItem name="1-2"><router-link :to="'/hello'">hello</router-link></MenuItem>
                <MenuItem name="1-3"><router-link :to="'/'">1</router-link></MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </template>
                <MenuItem name="2-1" :to="'/'">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>
<script>
export default {

}
</script>

