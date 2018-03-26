<template>
    <div>
        <el-container>
            <el-aside width="250px">
                <nva-bar></nva-bar>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>
<script>
import NavBar from './NavBar'
export default {
  name: "navbar",
  data() {
    return {};
  },
  components:{
      'nva-bar':NavBar
  }
};
</script>