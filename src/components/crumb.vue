<template>
    <Breadcrumb :style="{margin: '24px 0'}">
        <BreadcrumbItem to='/'>首页</BreadcrumbItem>
        <template v-if="!crumbData.children">
            <template v-if="crumbData.name=='welcome'">
            </template>
            <template v-else>
                <BreadcrumbItem :to="crumbData.name">{{crumbData.title}}</BreadcrumbItem>
            </template>
        </template>
        <template v-else>
            <BreadcrumbItem>{{crumbData.title}}</BreadcrumbItem>
            <BreadcrumbItem :to="crumbData.children[0].name">{{crumbData.children[0].title}}</BreadcrumbItem>
        </template>
    </Breadcrumb>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        crumbData: function() {
            return this.$store.state.path
        }
    },
    mounted() {
    }
}
</script>

