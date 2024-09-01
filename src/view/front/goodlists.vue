<template>
  <div class="shopping-page">
    <el-row>
      <el-col>
        <el-card>
          <div class="cart-header">
            <h2>商品列表</h2>
          </div>

          <el-table :data="products" style="width: 100%" height="750">
            <el-table-column prop="goods" label="商品名称" />
            <el-table-column prop="type" label="商品类型" />
            <el-table-column prop="price" label="商品价格" />
            <el-table-column label="操作">
              <template #default="scope">
                <el-button type="primary" @click="addToCart(scope.row)">
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

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const products = ref([]);

onMounted(async () => {
  const response = await fetch('http://127.0.0.1:5000/goods', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  products.value = data;
  // console.log(data);
});

const route = useRoute();

const addToCart = async (product) => {
  // console.log(product.id);
  const secondLevelPath = route.path.split('/')[2];
  const response = await fetch('http://127.0.0.1:5000/add_cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ goods: product.id, user: secondLevelPath }),
  });
};
</script>

<style scoped>
.shopping-page {
  padding: 20px;
}
</style>