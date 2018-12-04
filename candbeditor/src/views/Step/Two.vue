<template>
<div style="padding:20px">
     <Alert show-icon>
        说明：
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc"> &nbsp;1.请将不用的通道勾选并删除。 </template>
    </Alert>
  <Form :label-width="100" style="margin-top:30px;">
      <Card>
     <Row>
         <Col span="18">
          <FormItem label="所有的通道数">
            <Input  placeholder="15"></Input>
        </FormItem>
         </Col>
          <Col span="1">&nbsp;</Col>
          <Col span="5">
             <Button type="ghost" long>搜索通道</Button>
         </Col>
    </Row>

    <Row>
         <Col span="18">
          <FormItem label="勾选的通道数">
            <Input  placeholder="15"></Input>
        </FormItem>
         </Col>
          <Col span="1">&nbsp;</Col>
          <Col span="5">
             <Button type="warning" long>删除通道</Button>
         </Col>
    </Row>

    <Row>
         <Col span="18">
          <FormItem label="未勾选的通道数">
            <Input  placeholder="15"></Input>
        </FormItem>
         </Col>
          <Col span="1">&nbsp;</Col>
          <Col span="5">
             <Button type="warning" long>删除通道</Button>
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
