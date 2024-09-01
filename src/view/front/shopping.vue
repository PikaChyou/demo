<template>
  <div class="shopping-cart">
    <el-row>
      <el-col>
        <el-card>
          <div class="cart-header">
            <h2>购物车</h2>
          </div>
          <el-table :data="cartItems" style="width: 100%">
            <el-table-column prop="name" label="商品信息" />
            <el-table-column prop="price" label="单价" />
            <el-table-column label="数量">
              <template #default="scope">
                <el-input-number v-model="scope.row.quantity" :min="1" @change="updateTotal" />
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
            <el-button type="primary" @click="checkout">付款</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>



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