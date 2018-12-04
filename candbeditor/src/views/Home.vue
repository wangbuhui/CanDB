<style scoped>

</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
             <div class="iHeader">
               <iHeader/>
            </div>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff',height:'89vh', overflow:'auto'}">
                   <iSider/>
                </Sider>
                <Layout :style="{padding: '0 10px 10px'}">

                    <Content :style="{margin:'5px 0 0 0', minHeight: '280px'}">
                       <Row :style="{height:'60px'}">
                        <Col span="24">
                        <div style="padding:10px;background:#fff;border:1px solid #f1f1f1">
                            <Steps :current="current">
                             <Step title="第一步" content="设置波特率"></Step>
                             <Step title="第二步" content="选择需要的通道"></Step>
                             <Step title="第三步" content="选择触发条件"></Step>
                             <Step title="第四步" content="选择无线发送的通道"></Step>
                             <Step title="第五步" content="选择ECU所在的接口"></Step>
                           </Steps>
                        </div>
                        </Col>
                      </Row>
                      <Row :style="{background:'#f1f1f1'}">
                           <Col span="14" >
                              <Row> 
                                  <Col  span="24" :style="{background:'#FFF'}">
                                     <div  v-if="current===0">
                                       <OneStep/>
                                     </div>
                                      <div v-else-if="current === 1">
                                          <TwoStep/>
                                      </div>
                                      <div v-else-if="current === 2">
                                          <ThreeStep/>
                                      </div>
                                      <div v-else-if="current === 3">
                                          <FourStep/>
                                      </div>
                                       <div v-else-if="current === 4">
                                          <FiveStep/>
                                      </div>
                                  </col>
                                  <Col  span="12" :style="{height:'55px',background:'#FFF',padding:'10px',margin:'5px 0 0 0'}">
                                      <div v-if="current!=0">
                                        <Button type="success" @click="stepprevious" long>上一步</Button>
                                      </div>
                                  </col>
                                   <Col  span="12" :style="{height:'55px',background:'#FFF',padding:'10px',margin:'5px 0 0 0'}">
                                     <div v-if="current!=4">
                                          <Button type="success" @click="stepnext" long>下一步</Button>
                                     </div>
                                     <div v-else>
                                          <Button type="success" @click="stepnext" long>完成并另存为</Button>
                                     </div>
                                  </col>
                              </Row> 
                           </Col>
                           <Col span="10" :style="{background:'#ABABAB',height:'76vh'}">
                           </Col>
                      </Row>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import iHeader from '@/components/Header/Header.vue'
    import iSider from '@/components/Sider/Sider.vue'
    import OneStep from '@/views/Step/One.vue'
    import TwoStep from '@/views/Step/Two.vue'
    import ThreeStep from '@/views/Step/Three.vue'
    import FourStep from '@/views/Step/Four.vue'
    import FiveStep from '@/views/Step/Five.vue'
    export default {

       components: {
          iHeader,
          iSider,
          OneStep,
          TwoStep,
          ThreeStep,
          FourStep,
          FiveStep
       },
         data () {
            return {
                current: 0, //步骤条当前值
            }
        },
        methods: {
            stepnext () {
                if (this.current != 4) {
                    this.current += 1;
                }
            },
            stepprevious () {
                if (this.current != 0) {
                    this.current -= 1;
                }
            }
        }
    }
</script>
