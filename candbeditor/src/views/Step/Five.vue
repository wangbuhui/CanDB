<template>
   <div style="padding:20px">
   <Alert show-icon> 在左边的ECU列表中，选择要进行设置的ECU，通过右键菜单>>设置ECU所在接口,设定属于哪个CAN接口。</Alert>
    <Row style="text-align:center">
        <Col span="6">
          <label>CAN1接口ECU</label>
         <div class="canbox"></div>
        </Col>
         <Col span="6">
         <label>CAN1接口ECU</label>
          <div class="canbox"></div>
        </Col>
         <Col span="6">
         <label>CAN1接口ECU</label>
          <div class="canbox"></div>
        </Col>
         <Col span="6">
         <label>CAN1接口ECU</label>
         <div class="canbox"></div>
        </Col>
    </Row>
    <Row style="text-align:center">
        <Col span="6">
          <label>CAN1接口ECU</label>
         <div class="canbox"></div>
        </Col>
         <Col span="6">
         <label>CAN1接口ECU</label>
          <div class="canbox"></div>
        </Col>
         <Col span="6">
         <label>CAN1接口ECU</label>
          <div class="canbox"></div>
        </Col>
         <Col span="6">
         <label>CAN1接口ECU</label>
         <div class="canbox"></div>
        </Col>
    </Row>

        
    
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .canbox{
    height: 130px;
    width:100px;
    border: 1px solid #f1f1f1;
    margin:10px;
  }
</style>