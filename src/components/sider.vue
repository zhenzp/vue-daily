<style lang="less" scoped>

</style>

<template>
    <Sider hide-trigger :style="{position: 'fixed', height: '100%', left: 0, overflow: 'auto'}">
        <Menu active-name="welcome" theme="dark" width="auto" :open-names="[]" @on-select='change'>

            <template v-for="item in menuList">
                <template v-if="!item.children">
                    <MenuItem :name="item.name" :key="'menuitem' + item.key">
                    <Icon :type="item.icon || ''" :size="iconSize" :key="'menuicon' + item.key"></Icon>
                    <span :key="'title' + item.key">{{ item.title }}</span>
                    </MenuItem>
                </template>
                <template v-else>
                    <Submenu :name="item.name" :key="item.key">
                        <template slot="title">
                            <Icon :type="item.icon" :size="iconSize"></Icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="child in item.children">
                            <MenuItem :name="child.key" :key="'menuitem' + child.key">
                            <Icon :type="child.icon" :size="iconSize" :key="'icon' + child.key"></Icon>
                            <span class="layout-text" :key="'title' + child.key">{{ child.title }}</span>
                            </MenuItem>
                        </template>
                    </Submenu>
                </template>
            </template>
        </Menu>
    </Sider>
</template>
<script>
export default {
    data() {
        return {
            iconSize: 16,
            menuList: this.$store.state.menuList
        }
    },
    methods: {
        change(name) {
            this.$router.push(
                {
                    name: name
                }
            )
            this.$store.commit('changePath', name)
        }
    },
    mounted() {
    }
}
</script>

