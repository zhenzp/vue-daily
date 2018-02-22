<style scoped>
.expand-row {
    margin-bottom: 16px;
}
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
            <span class="expand-key">author_name: </span>
            <span class="expand-value">{{ row.author_name }}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">title: </span>
            <span class="expand-value">{{ row.title }}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">email: </span>
            <span class="expand-value">{{ row.email }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    props: {
        row: Object
    }
};
</script>