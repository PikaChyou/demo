<template>
  <div class="shopping-cart">
    <el-row>
      <el-col>
        <el-card>
          <div class="cart-header">
            <h2>购物车</h2>
          </div>
          <el-table :data="cartItems" style="width: 100%">
            <el-table-column prop="goods" label="商品信息" />
            <el-table-column prop="price" label="单价" />
            <el-table-column label="数量">
              <template #default="scope">
                <el-input-number v-model="scope.row.num" :min="1" @change="updateTotal(scope.row.id)" />
              </template>
            </el-table-column>
            <el-table-column label="小计">
              <template #default="scope">
                ¥{{ scope.row.price * scope.row.num }}
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

  <el-dialog v-model="dialogTableVisible" title="Recommend" width="800">
    <el-table :data="gridData">
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
    <br>
    <div class="dislog-styl">
      <el-button @click="checkoutFinal">确认结账</el-button>
    </div>
  </el-dialog>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';


const dialogTableVisible = ref(false)

const route = useRoute();

const cartItems = ref([]);
const gridData = ref([])

onMounted(async () => {
  const response = await fetch('http://127.0.0.1:5000/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'user': route.path.split('/')[2] }),
  });
  const data = await response.json();
  cartItems.value = data;
  console.log(data)
});

const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + item.price * item.num;
  }, 0);
});

const updateTotal = async (id) => {
  // console.log(id)
  await fetch('http://127.0.0.1:5000/change_cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "goods": id, 'user': route.path.split('/')[2], "num": cartItems.value.find(item => item.id === id).num }),
  });
};

const removeItem = async (item) => {
  // 向后端发送请求，带上该行的 id
  // console.log(item.id)
  await fetch('http://127.0.0.1:5000/delete_cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "goods": item.id, "user": route.path.split('/')[2], "num": 0 }),
  });
  cartItems.value = cartItems.value.filter((cartItem) => {
    return cartItem.id !== item.id;
  });
};

const checkout = async () => {
  // 处理结账逻辑
  console.log('结账', cartItems.value);

  dialogTableVisible.value = true;
  const rcm = (await fetch('http://127.0.0.1:5000/recommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "order": cartItems.value.map(item => item.goods) }),
  }).then(res => res.json())).result
  console.log(rcm)

  const goods = await fetch('http://127.0.0.1:5000/goods', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
  console.log(goods)

  gridData.value = rcm.map(name => {
    const good = goods.find(good => good.goods === name)
    return {
      goods: name,
      id: good.id,
      price: good.price,
      type: good.type,
    }
  })
  console.log(gridData.value)
};

const addToCart = async (product) => {
  // console.log(product.id);
  const secondLevelPath = route.path.split('/')[2];
  await fetch('http://127.0.0.1:5000/add_cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ goods: product.id, user: secondLevelPath }),
  });
  const response = await fetch('http://127.0.0.1:5000/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'user': route.path.split('/')[2] }),
  });
  const data = await response.json();
  cartItems.value = data;
  ElMessage.success('加入购物车成功');
};

const checkoutFinal = async () => {
  // 处理结账逻辑
  console.log('结账', cartItems.value);
  const response = await fetch('http://127.0.0.1:5000/add_order',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "user": route.path.split('/')[2], "goods_list": cartItems.value.map(item => ({
          id: item.id,
          num: item.num,
        }))
      }),
    });
  const data = await response.json();
  alert(data.result);
  cartItems.value.forEach(async (item) => {
    await fetch('http://127.0.0.1:5000/delete_cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "goods": item.id, "user": route.path.split('/')[2] }),
    });
  })
  cartItems.value = [];
  dialogTableVisible.value = false;
};

</script>

<style scoped>
.dislog-styl {
  display: flex;
  justify-content: flex-end;
}

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