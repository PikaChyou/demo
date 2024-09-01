<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <BCommonAside/>
      </el-aside>
      <div class="container">
        <div class="header">
          <BCommonHeader/>
        </div>
        <div class="main">
          <router-view>
          </router-view>
        </div>
      </div>
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

  .container{
    display: flex;
    flex-direction: column;
    height:100vh;
  }


  .header{
    width:100%;
    height:7.5%;
  }

  .main{
    height:92.5%
  }


  </style>
  