<template>
    <div class="shopping-page">
        <el-row>
            <el-col :span="24">
                <el-card>
                    <div class="cart-header">
                        <h2>商品列表</h2>
                        <el-input placeholder="搜索商品" v-model="searchQuery" clearable @input="updateInputWidth" />
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
import { ElMessage } from 'element-plus';


const Fproducts = [];
const products = ref([]);

onMounted(async () => {
    const response = await fetch('http://127.0.0.1:5000/goods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    Fproducts.value = data;
    products.value = Fproducts.value;
    // console.log(data);
});

const route = useRoute();

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
    ElMessage.success('加入购物车成功');
};

const searchQuery = ref('');

const updateInputWidth = () => {
    console.log(searchQuery.value);
    products.value = Fproducts.value.filter((item) => item.goods.includes(searchQuery.value));
    console.log(products.value);
};

</script>

<style scoped>
.shopping-page {
    padding: 20px;
}
</style>
