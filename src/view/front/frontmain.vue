<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <FCommonAside/>
      </el-aside>
      <el-container>
        <el-header>
          <FCommonHeader/>
        </el-header>
        <el-main>
          <router-view>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

  <script>
  import FCommonAside from '../../components/FCommonAside.vue'
  // 导入拆分的菜单组件
  import FCommonHeader from '../../components/FCommonHeader.vue'
  // 导入拆分的头部组件
  export default {
    // 在components中引入组件，引入好，就可以在template中直接使用了
    components: {
      FCommonAside,
      FCommonHeader
    },
    data() {
      return{
        
      }
    }
  }
  </script>
  <style scoped>
  .el-header{
    padding: 0 !important; 
    border: none;
  }
  </style>
  