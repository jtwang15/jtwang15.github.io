<template>
    <div class="nav-bar">
        <div class="nav-header">
            <!-- <span alt="香槟色的百合" class="nav-flower"> -->
            <span class="nav-flower"></span>
        </div>
        <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
  name: "nav-bar"
};
</script>
<style lang="scss" scoped>
.nav-bar {
  opacity: 0.9;
  .nav-header {
    // height: 60px;
    padding: 4px 6px;
    overflow: hidden;
    .nav-flower {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-image: url("../../assets/img/baihe.jpg");
      background-size: 80px 80px;
      background-position: 50% 90%
    }
  }
}
</style>


