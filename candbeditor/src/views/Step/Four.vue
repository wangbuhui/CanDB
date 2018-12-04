<template>
<div style="padding:20px">
     <Alert show-icon>
        说明：
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc"> &nbsp;1.每个文件中最多可以设定50个通道作为无线发送变量。<br> </template>
        <template slot="desc"> &nbsp;2.设置好的通道将会在通道列表中显示成蓝色，并在名称后加上_W字样。<br> </template>
        <template slot="desc"> &nbsp;3.如果某通道被同时设置了触发和无线发送，将会显示红色，并加上_TW字样 </template>
    </Alert>
  <Form :label-width="90" style="margin-top:20px;">
     <Card> 
     <Row> 
         <Col span="12">
          <FormItem label="所有通道数">
            <Input  placeholder="Enter CAN1..."></Input>
        </FormItem>
         </Col>
          <Col span="12">
           <FormItem label="已预订通道数">
            <Input  placeholder="Enter CAN2..."></Input>
           </FormItem>
         </Col>
    </Row>
    
     <Row>
         <Col span="16">
          <FormItem label="勾选的通道数">
            <Input  placeholder="15"></Input>
        </FormItem>
         </Col>
          <Col span="1">&nbsp;</Col>
          <Col span="7">
             <Button type="info" long>搜索通道</Button>
         </Col>
    </Row>

     <Row>
          <Col span="1">&nbsp;</Col>
          <Col span="10">
             <Button type="ghost" long>设定为无线发送通道</Button>
         </Col>
          <Col span="1">&nbsp;</Col>
         <Col span="10">
             <Button type="ghost" long>取消为无线发送通道</Button>
         </Col>
    </Row>
   </Card>
    </Form>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
