<template>
    <Menu mode="horizontal">
        <div class="layout-logo">
            <h3>CANDB Editor</h3>
        </div>
        <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="folder"></Icon>
            <Dropdown>
                文件
                <Icon type="arrow-down-b"></Icon>
                <DropdownMenu slot="list">
                    <DropdownItem>
                        <Icon type="android-add-circle"></Icon> 新建</DropdownItem>
                    <DropdownItem>
                        <Icon type="android-open"></Icon> 打开</DropdownItem>
                    <DropdownItem>
                        <Icon type="ios-checkmark"></Icon> 保存</DropdownItem>
                    <DropdownItem>
                        <Icon type="ios-redo"></Icon> 另存为</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-briefcase"></Icon>
            <Dropdown>
                工具
                <Icon type="arrow-down-b"></Icon>
                <DropdownMenu slot="list">
                    <DropdownItem>报文列表</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </MenuItem>
            <MenuItem name="3">
            <Icon type="help-circled"></Icon>
            <Dropdown>
                帮助
                <Icon type="arrow-down-b"></Icon>
                <DropdownMenu slot="list">
                    <DropdownItem>用户手册</DropdownItem>
                    <DropdownItem>语言</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </MenuItem>
        </div>
    </Menu>
</template>

<script>
    export default {};
</script>

<style scoped>
    .layout-logo {
        width: 200px;
        height: 60px;
        line-height: 60px;
        float: left;
        padding: 0 20px;
    }
</style>