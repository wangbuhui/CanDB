<template>
<div style="padding:20px">
  <Form  :label-width="55">
      <Card>
     <Row>
         <Col span="12">
          <FormItem label="CAN1">
            <Select v-model="can1" style="width:200px">
               <Option v-for="item in canbtllist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
         </Col>
          <Col span="12">
           <FormItem label="CAN2">
            <Select v-model="can2" style="width:200px">
               <Option v-for="item in canbtllist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
         </Col>
    </Row>

      <Row>
         <Col span="12">
          <FormItem label="CAN3">
             <Select v-model="can3" style="width:200px">
               <Option v-for="item in canbtllist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
         </Col>
          <Col span="12">
           <FormItem label="CAN4">
             <Select v-model="can4" style="width:200px">
               <Option v-for="item in canbtllist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
         </Col>
    </Row>

      <Row>
         <Col span="12">
          <FormItem label="CAN5">
             <Select v-model="can5" style="width:200px">
               <Option v-for="item in canbtllist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
         </Col>
          <Col span="12">
           <FormItem label="CAN6">
             <Select v-model="can6" style="width:200px">
               <Option v-for="item in canbtllist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
         </Col>
    </Row>

      <Row>
         <Col span="12">
          <FormItem label="CAN7">
            <Select v-model="can7" style="width:200px">
               <Option v-for="item in canbtllist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
         </Col>
          <Col span="12">
           <FormItem label="CAN8">
            <Select v-model="can8" style="width:200px">
               <Option v-for="item in canbtllist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
         </Col>
    </Row>
    </Card>
    </Form>
</div>
</template>

<script>
export default {
data () {
    return{
       canbtllist:[
           {
               value: "1",
               label: "50K"
           },
           {
               value: "2",
               label: "100K"
           },
           {
               value: "3",
               label: "125K"
           },
           {
               value: "4",
               label: "250K"
           },
           {
               value: "5",
               label: "500K"
           },
            {
               value: "6",
               label: "1000K"
           },
            {
               value: "0",
               label: "不使用"
           }
       ],
       can1:"0",
       can2:"0",
       can3:"0",
       can4:"0",
       can5:"0",
       can6:"0",
       can7:"0",
       can8:"0"
    }
 }
}
</script>

<style>

</style>
