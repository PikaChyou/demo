<template>  
    <div class="shopping-cart">  
      <el-row>    
        <el-col :span="18">  
          <el-card>  
            <div class="cart-header">  
              <h2>购物车</h2>  
            </div>  
            <el-table :data="cartItems" style="width: 100%">  
              <el-table-column prop="name" label="商品信息" />  
              <el-table-column prop="price" label="单价" />  
              <el-table-column label="数量">  
                <template #default="scope">  
                  <el-input-number  
                    v-model="scope.row.quantity"  
                    :min="1"  
                    @change="updateTotal"  
                  />  
                </template>  
              </el-table-column>  
              <el-table-column label="小计">  
                <template #default="scope">  
                  ¥{{ scope.row.price * scope.row.quantity }}  
                </template>  
              </el-table-column>  
              <el-table-column label="交易操作">  
                <template #default="scope">  
                  <el-button type="danger" @click="removeItem(scope.row)">删除</el-button>  
                </template>  
              </el-table-column>  
            </el-table>  
            <div class="cart-footer">  
              <span>应付金额：¥{{ totalAmount }}</span>  
              <el-button type="primary" @click="checkout">下单</el-button>  
            </div>  
          </el-card>  
        </el-col>  
      </el-row>  
    </div>  
  </template>  
  
  <script>  
  export default {  
    data() {  
      return {  
        cartItems: [  
          { id: 1, name: '御赠金福零食礼盒 1.199千克', price: 178, quantity: 1 },  
          // 可以添加更多商品  
        ],  
      };  
    },  
    computed: {  
      totalAmount() {  
        return this.cartItems.reduce((total, item) => {  
          return total + item.price * item.quantity;  
        }, 0);  
      },  
    },  
    methods: {  
      updateTotal() {  
        // 更新总金额  
      },  
      removeItem(item) {  
        this.cartItems = this.cartItems.filter(i => i.id !== item.id);  
      },  
      checkout() {  
        // 处理下单逻辑  
        alert('下单成功！');  
      },  
    },  
  };  
  </script>  
  
  <style scoped>  
  .shopping-cart {  
    padding: 20px;  
  }  
  .cart-header {  
    margin-bottom: 20px;  
  }  
  .cart-footer {  
    display: flex;  
    justify-content: space-between;  
    margin-top: 20px;  
  }  
  </style>  