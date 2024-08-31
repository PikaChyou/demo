<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <BCommonAside/>
      </el-aside>
      <el-container>
        <el-header>
          <BCommonHeader/>
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
  import BCommonAside from '../../components/BCommonAside.vue'
  // 导入拆分的菜单组件
  import BCommonHeader from '../../components/BCommonHeader.vue'
  // 导入拆分的头部组件
  export default {
    // 在components中引入组件，引入好，就可以在template中直接使用了
    components: {
      BCommonAside,
      BCommonHeader
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
  