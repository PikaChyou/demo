
<template>
    <div class="shopping-page">
        <el-row>
            <el-col :span="24">
                <el-card>
                    <div class="cart-header">
                        <h2>商品列表</h2>
                        <el-input
                            placeholder="搜索商品"
                            v-model="searchQuery"
                            clearable
                            :style="{ width: inputWidth }"
                            @input="updateInputWidth"
                        />
                    </div>

                    <el-table :data="filteredProducts" style="width: 100%">
                        <el-table-column prop="name" label="商品名称" />
                        <el-table-column prop="price" label="商品价格" />
                        <el-table-column label="操作">
                            <template #default="scope">
                                <el-button
                                    type="primary"
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
            searchQuery: '',
            inputWidth: '200px', // 初始宽度
            products: [
                { name: '空气净化器', price: 999 },
                { name: '网易智能电子秤', price: 59 },
                { name: 'IH电饭煲', price: 499 },
                { name: '智能手表', price: 199 },
            ],
        };
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product =>
                product.name.includes(this.searchQuery)
            );
        },
    },
    methods: {
        addToCart(product) {
            this.$message.success(`${product.name} 已加入购物车!`);
        },
        updateInputWidth() {
            const baseWidth = 200; // 基础宽度
            const extraWidth = this.searchQuery.length * 10; // 每个字符增加的宽度
            this.inputWidth = `${baseWidth + extraWidth}px`;
        },
    },
};
</script>

<style scoped>
.shopping-page {
    padding: 20px;
}
</style>
