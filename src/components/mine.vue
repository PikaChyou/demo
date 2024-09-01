
<template>  
  <el-container class="container mx-auto my-5">
      <el-header>
          <h1 class="text-2xl font-bold">我的页面</h1>
      </el-header>
      <el-main>
          <el-card class="mb-6">
              <h2 class="text-xl font-semibold mb-2">基本个人信息</h2>
              <div>
                  <strong>姓名:</strong> {{ user.name }} <br />
                  <strong>邮箱:</strong> {{ user.email }} <br />
                  <strong>电话:</strong> {{ user.phone }} <br />
              </div>
          </el-card>

          <el-card class="mb-6">
              <h2 class="text-xl font-semibold mb-2">商户信息</h2>
              <div>
                  <strong>商户名称:</strong> {{ merchant.name }} <br />
                  <strong>商户地址:</strong> {{ merchant.address }} <br />
                  <strong>商户电话:</strong> {{ merchant.phone }} <br />
              </div>
          </el-card>
      </el-main>
  </el-container>
</template>

<script>  
import { ref } from "vue";  

export default {  
  name: "MyPage",  
  setup() {  
      const user = ref({  
          name: "张三",  
          email: "zhangsan@example.com",  
          phone: "123-456-7890",  
      });  

      const merchant = ref({  
          name: "张三的商店",  
          address: "北京市朝阳区某街道100号",  
          phone: "098-765-4321",  
      });  

      return {  
          user,  
          merchant,  
      };  
  },  
};  
</script>  

<style scoped>  
.container {  
  max-width: 800px;  
  margin: 0 auto;  
  padding: 20px;  
}  
</style>
