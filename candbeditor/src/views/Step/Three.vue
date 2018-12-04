<template>
<div style="padding:20px">
     <Alert show-icon>
        说明：
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc"> &nbsp;1.每个文件中只能设定一个触发条件，同时触发存储和无线发送。 </template>
        <template slot="desc"> &nbsp;2.设置好的通道将会在通道列表中显示成红色，并在名称后加上_T字样。 </template>
    </Alert>
  <Form :label-width="80" style="margin-top:30px;">
      <Card>
     <Row>
         <Col span="13">
          <FormItem label="当前通道">
            <Input  placeholder="15"></Input>
        </FormItem>
         </Col>
          <Col span="1">&nbsp;</Col>
          <Col span="5">
             <Button type="info" long>设定为触发</Button>
         </Col>
           <Col span="1">&nbsp;</Col>
         <Col span="4">
             <Button type="ghost">搜索通道</Button>
         </Col>
    </Row>

     <Row>
         <Col span="13">
          <FormItem label="已指定触发">
            <Input  placeholder="15"></Input>
        </FormItem>
         </Col>
          <Col span="1">&nbsp;</Col>
          <Col span="5">
             <Button type="info" long>清除触发</Button>
         </Col>
           <Col span="1">&nbsp;</Col>
         <Col span="4">
             <!-- <Button type="info">搜索通道</Button> -->
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
