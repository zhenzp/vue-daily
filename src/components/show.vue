<template>
    <div>
        <h1>
            {{author}}
        </h1>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    computed: {
        author() {
            return this.$store.state.name
        }
    }
}
</script>
