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
                    <DatePicker type="daterange" placeholder="Select date" :model="formItem.date" format="yyyy-MM-dd" placement='bottom-end' @on-change="(datetime) => { dataRangeChange(datetime,'start_date','end_date')}"></DatePicker>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                    <TimePicker type="timerange" placeholder="Select time" :model="formItem.time" format="HH:mm:ss" placement='bottom-end'  @on-change="(datetime) => { dataRangeChange(datetime,'start_time','end_time')}"></TimePicker>
                    </Col>
                </Row>
            </FormItem>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="6" offset='18'>
            <FormItem>
                <Button type="primary" @click="searchFormSubmit">搜索</Button>
                <Button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
            </FormItem>
            </Col>
        </Row>
    </Form>
</template>
<script>
import bus from '@/eventBus';
export default {
  data() {
    return {
      formItem: {
        name: '1111',
        sex: 'male',
        text: '',
        select: '',
        checkbox: [],
        switch: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: ''
      }
    };
  },
  methods: {
    searchFormSubmit() {
      this.$emit('formsubmit', this.formItem);
      bus.$emit('formsubmitBus', this.formItem);
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    //选择开始时间、结束时间
    dataRangeChange(date, startKey, endKey) {
      console.log('date', date);
      console.log('startKey', startKey);
      console.log('endKey', endKey);
      if (typeof date[0] !== 'undefined' && date[0] != '') {
        this.formItem[startKey] = date[0];
        this.formItem[endKey] = date[1];
      } else {
        this.formItem[startKey] = '';
        this.formItem[endKey] = '';
      }
    }
  }
};
</script>
