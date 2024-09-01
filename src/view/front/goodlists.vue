<template>  
    <div class="shopping-page">  
        <el-row>  
        <el-col :span="6">  
          <el-menu default-active="1">  
            <el-menu-item index="1">购物车</el-menu-item>  
            <el-menu-item index="2">我的订单</el-menu-item>   
          </el-menu>  
        </el-col>  
      <el-col :span="18">  
        <el-card>  
          <div class="cart-header">  
             <h2>商品列表</h2>   
          </div>  
     
      <el-table :data="products" style="width: 100%">  
        <el-table-column prop="name" label="商品名称" />  
        <el-table-column prop="price" label="商品价格" />  
        <el-table-column label="操作">  
          <template #default="scope">  
            <el-button  
              type="primary"  
              icon="el-icon-plus"  
              @click="addToCart(scope.row)"  
            >  
              加入购物车  
            </el-button>  
          </template>  
        </el-table-column>  
      </el-table>  
      </el-card>
    </el-col> 
</el-row> 
    </div>  
  </template>  
  
  <script>  
  export default {  
    data() {  
      return {  
        products: [  
          { name: '空气净化器', price: 999 },  
          { name: '网易智能电子秤', price: 59 },  
          { name: 'IH电饭煲', price: 499 },  
          { name: '智能手表', price: 199 },  
        ],  
      };  
    },  
    methods: {  
      addToCart(product) {  
        this.$message.success(`${product.name} 已加入购物车!`);  
        // 这里可以添加逻辑将商品添加到购物车  
      },  
    },  
  };  
  </script>  
  
  <style scoped>  
  .shopping-page {  
    padding: 20px;  
  }  
  </style>