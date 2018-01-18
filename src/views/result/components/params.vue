<template>
    <Form :model="formItem" ref="formItem" :label-width="80">
        <Row :gutter="16">
            <Col span="6">
            <FormItem label="姓名">
                <Input v-model="formItem.name" placeholder="请输入姓名"></Input>
            </FormItem>
            </Col>
            <Col span="6">
            <FormItem label="性别">
                <RadioGroup v-model="formItem.sex">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
            </FormItem>
            </Col>
            <Col span="6">
            <FormItem label="描述">
                <Input v-model="formItem.text" placeholder="请输入描述"></Input>
            </FormItem>
            </Col>
            <Col span="6">
            <FormItem label="户籍">
                <Select v-model="formItem.select">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="7">
            <FormItem label="需求">
                <CheckboxGroup v-model="formItem.checkbox">
                    <Checkbox label="Eat"></Checkbox>
                    <Checkbox label="Sleep"></Checkbox>
                    <Checkbox label="Run"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            </Col>
            <Col span="7">
            <FormItem label="是否重要">
                <i-switch v-model="formItem.switch" size="large">
                    <span slot="open">On</span>
                    <span slot="close">Off</span>
                </i-switch>
            </FormItem>
            </Col>
            <Col span="10">
            <FormItem label="时间">
                <Row>
                    <Col span="11">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                    </Col>
                </Row>
            </FormItem>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="6" offset='18'>
            <FormItem>
                <Button type="primary" @click="search">搜索</Button>
                <Button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
            </FormItem>
            </Col>
        </Row>
    </Form>
</template>
<script>
import bus from '@/eventBus'
export default {
    data() {
        return {
            formItem: {
                name: '',
                sex: 'male',
                text: ''
            }
        }
    },
    methods: {
        search() {
            bus.$emit('formsubmitBus', this.formItem);
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>
