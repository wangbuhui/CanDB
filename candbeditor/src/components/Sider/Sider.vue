<template>
    <div class="sidermain">
        <Tree :data="siderdata" v-contextmenu:contextmenu @on-select-change="selcetchange" ref="sidertree"></Tree>
        <v-contextmenu :ref="contextmenu" style="font-size:10px;">
            <div v-if="menuindex===0">
                <v-contextmenu-item @click="addECU">
                    <Icon type="android-add-circle"></Icon> 新增ECU</v-contextmenu-item>
            </div>
            <div v-else-if="menuindex===1">
                <v-contextmenu-item @click="editECU">
                    <Icon type="edit"></Icon> 重命名</v-contextmenu-item>
                <v-contextmenu-item @click="addCANMsg">
                    <Icon type="android-add-circle"></Icon> 新增CAN报文</v-contextmenu-item>
                <v-contextmenu-item divider></v-contextmenu-item>
                <v-contextmenu-item @click="DeleteECU">
                    <Icon type="trash-a"></Icon> 删除该ECU</v-contextmenu-item>
            </div>
            <div v-else-if="menuindex===2">
                <v-contextmenu-item @click="AddSignal">
                    <Icon type="android-add-circle"></Icon> 新增信号</v-contextmenu-item>
                <v-contextmenu-item>
                    <Icon type="edit"></Icon> 编辑本报文</v-contextmenu-item>
                <v-contextmenu-item divider></v-contextmenu-item>
                <v-contextmenu-item>
                    <Icon type="trash-a"></Icon> 删除本报文</v-contextmenu-item>
            </div>
            <div v-else-if="menuindex===3">
                <v-contextmenu-item>
                    <Icon type="edit"></Icon> 编辑本信号</v-contextmenu-item>
                <v-contextmenu-item divider></v-contextmenu-item>
                <v-contextmenu-item>
                    <Icon type="trash-a"></Icon> 删除本信号</v-contextmenu-item>
            </div>
            <div v-else>
                <v-contextmenu-item>
                    <Icon type="help-circled"></Icon> 请选择树节点</v-contextmenu-item>
            </div>
        </v-contextmenu>
        <!-- 新增ECU Modal -->
        <Modal v-model="ECU.AddEcuModal" title="新增ECU" @on-ok="AddECUok">
            <Alert show-icon>请输入ECU名称</Alert>
            <Input v-model="ECU.Add.EcuName" placeholder="Enter ECU name..." />
        </Modal>
        <!-- 编辑ECU Modal -->
        <Modal v-model="ECU.EditEcuModal" title="ECU重命名" @on-ok="EditECUok">
            <Alert show-icon>请输入ECU名称</Alert>
            <Input v-model="ECU.Edit.EcuName" placeholder="Enter ECU name..." />
        </Modal>
        <!-- 新增CAN报文 Modal -->
        <Modal v-model="CANMSG.AddCANModal" title="报文属性" @on-ok="addCANMsgok">
            <Card>
                <Row>
                    <Col span="24">
                    <Input v-model="CANMSG.Add.CanName" placeholder="Enter CANMSG name...">
                    <span slot="prepend">名 称</span>
                    </Input>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span="10">
                    <RadioGroup type="button">
                        <Radio label="标准帧">标准帧</Radio>
                        <Radio label="扩展帧"></Radio>
                    </RadioGroup>
                    </Col>
                    <Col span="7">
                    <span>ID : &nbsp;</span>
                    <InputNumber :min="0"> </InputNumber>
                    </Col>
                    <Col span="7">
                    <span>DLC : &nbsp;</span>
                    <InputNumber :min="1"> </InputNumber>
                    </Col>
                </Row>
            </Card>
        </Modal>
        <!-- 新增信号 -->
        <Modal v-model="SIGNAL.AddSignalModal" :styles="{top: '10px'}" title="通道属性" @on-ok="AddSignalok">
            <Form :label-width="65">
                <Card>
                    <Row>
                        <Col span="24">
                        <FormItem label="名称">
                            <Input v-model="SIGNAL.Add.SignalName"></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                        <FormItem label="开始位">
                            <InputNumber :min="0"> </InputNumber>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="位数量">
                            <InputNumber :min="0"> </InputNumber>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                        <FormItem label="字节数">
                            <Select>
                                     
                                   </Select>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="数据类型">
                            <Select>
                                     
                                    </Select>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                        <FormItem label="系数">
                            <Input></Input>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="偏值">
                            <Input></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                        <FormItem label="最大值">
                            <Input></Input>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="最小值">
                            <Input></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                        <FormItem label="默认值">
                            <Input></Input>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem label="单位">
                            <Input></Input>
                        </FormItem>
                        </Col>
                    </Row>
                </Card>
            </Form>
        </Modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contextmenu: 'contextmenu', // 设置右击菜单属性
                menuindex: -1,
                siderdata: [{
                        title: 'CAN1',
                        expand: false,
                        level: 0,
                        pid: 0
                    },
                    {
                        title: 'CAN2',
                        expand: false,
                        level: 0,
                        pid: 1
                    },
                    {
                        title: 'CAN3',
                        expand: false,
                        level: 0,
                        pid: 2
                    },
                    {
                        title: 'CAN4',
                        expand: false,
                        level: 0,
                        pid: 3
                    },
                    {
                        title: 'CAN5',
                        expand: false,
                        level: 0,
                        pid: 4
                    },
                    {
                        title: 'CAN6',
                        expand: false,
                        level: 0,
                        pid: 5
                    },
                    {
                        title: 'CAN7',
                        expand: false,
                        level: 0,
                        pid: 6
                    },
                    {
                        title: 'CAN8',
                        expand: false,
                        level: 0,
                        pid: 7
                    }
                ],
                ECU: {
                    AddEcuModal: false, // 新增ECU弹框是否显示
                    EditEcuModal: false, // 编辑ECU弹框是否显示
                    Add: {
                        EcuName: null // ECU名称
                    },
                    Edit: {
                        EcuName: null //ECU名称
                    }
                },
                CANMSG: {
                    AddCANModal: false, //新增CAN报文弹框是否显示
                    Add: {
                        CanName: null,
                    }
                },
                SIGNAL: {
                    AddSignalModal: false, //新增信号弹框是否显示
                    Add: {
                        SignalName: null
                    }
                }
            }
        },
        methods: {
            //树选中事件，设置右击菜单属性
            selcetchange() {
                var treedata = this.$refs.sidertree.getSelectedNodes();
                if (treedata.length > 0) {
                    var level = treedata[0]["level"];
                    this.menuindex = level;
                } else {
                    this.menuindex = -1;
                }
            },
            //新增 ECU 弹框
            addECU() {
                this.ECU.AddEcuModal = true;
            },
            //新增 ECU
            AddECUok() {
                if (!this.ECU.Add.EcuName) {
                    this.$Message.warning('ECU参数名不能为空！');
                    return;
                }
                const data = this.$refs.sidertree.getSelectedNodes();
                const index = parseInt(data[0]["pid"]);
                const children = data[0].children || [];
                children.push({
                    title: this.ECU.Add.EcuName,
                    expand: true,
                    level: 1,
                    pid: index
                });
                this.$set(this.siderdata[index], 'children', children);
            },
            // ECU重命名 弹框
            editECU() {
                this.ECU.EditEcuModal = true;
                const data = this.$refs.sidertree.getSelectedNodes();
                this.ECU.Edit.EcuName = data[0].title;
            },
            // ECU重命名
            EditECUok() {
                if (!this.ECU.Edit.EcuName) {
                    this.$Message.warning('ECU参数名不能为空！');
                    return;
                }
                const data = this.$refs.sidertree.getSelectedNodes();
                const i = data[0]["pid"];
                const index = this.siderdata[i].children.indexOf(data[0]);
                var children = {
                    title: this.ECU.Edit.EcuName,
                    expand: true,
                    level: 1,
                    pid: i
                }
                this.$set(this.siderdata[i].children, index, children);
                this.$Message.success('修改成功！');
            },
            //删除ECU
            DeleteECU() {
                const data = this.$refs.sidertree.getSelectedNodes();
                const i = data[0]["pid"];
                const index = this.siderdata[i].children.indexOf(data[0]);
                this.siderdata[i].children.splice(index, 1);
                this.$Message.success('删除成功！');
            },
            //新增CAN报文 弹框
            addCANMsg() {
                this.CANMSG.AddCANModal = true;
            },
            //新增CAN报文 
            addCANMsgok() {
                if (this.CANMSG.Add.CanName == null || this.CANMSG.Add.CanName == '') {
                    this.$Message.warning('名称不能为空！');
                    return;
                }
                var startstr = this.CANMSG.Add.CanName.substring(0, 1);
                if (this.checkNumber(startstr)) {
                    this.$Message.warning('名称不能以数字开头');
                    return;
                }
                const data = this.$refs.sidertree.getSelectedNodes();
                const i = data[0]["pid"];
                const index = this.siderdata[i].children.indexOf(data[0]);
                const children = data[0].children || [];
                children.push({
                    title: this.CANMSG.Add.CanName,
                    expand: true,
                    level: 2,
                    pid: i
                });
                this.$set(this.siderdata[i].children[index], 'children', children);
            },
            //新增信号 Modal
            AddSignal() {
                this.SIGNAL.AddSignalModal = true;
            },
            //新增信号
            AddSignalok() {
                if (this.SIGNAL.Add.SignalName == null || this.SIGNAL.Add.SignalName == '') {
                    this.$Message.warning('名称不能为空！');
                    return;
                }
                var startstr = this.SIGNAL.Add.SignalName.substring(0, 1);
                if (this.checkNumber(startstr)) {
                    this.$Message.warning('名称不能以数字开头');
                    return;
                }
                const data = this.$refs.sidertree.getSelectedNodes();
                const i = data[0]["pid"];
                alert("json"+JSON.stringify(this.siderdata));
                alert("nodekey"+ JSON.stringify(data[0].nodeKey));
                var n3 = data[0].nodeKey;
                var p3data = this.getParentnodeKey(this.siderdata, n3, null)
               // var n2 = p3data[]
            },
            //返回父及Data
            getParentnodeKey(data, nodekey, pdata) {
                for(var i=0;i<data.length;i++)
                {
                    if (data[i].nodeKey == nodekey) {
                        if (pdata != null) {
                            return pdata;
                        } else {
                            return data[i];
                        }
                    } else {
                        if (data[i].hasOwnProperty("children")) {
                          return this.getParentnodeKey(data[i].children, nodekey, data[i]);
                        }
                    }

                }
            },
            //验证字符串是否是数字
            checkNumber(theObj) {
                var reg = /^[0-9]+.?[0-9]*$/;
                if (reg.test(theObj)) {
                    return true;
                }
                return false;
            }
        }
    }
</script>

<style scoped>
    .sidermain {
        padding: 0 20px;
    }
</style>