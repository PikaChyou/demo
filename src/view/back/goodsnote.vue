<template>
  <div class="my-orders">
    <el-row>
      <el-col>
        <el-card>
          <div class="orders-header">
            <h2>全部订单</h2>
          </div>
          <el-table :data="orders" style="width: 100%" height="750">
            <el-table-column prop="date" label="时间" />
            <el-table-column prop="oid" label="订单号" />
            <el-table-column prop="goods" label="商品" />
            <el-table-column prop="price" label="单价" />
            <el-table-column prop="num" label="数量" />
            <el-table-column label="总价">
              <template #default="scope">
                ¥{{ scope.row.price * scope.row.num }}
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
      activeTab: 'all', // 默认选中全部  
      orders: [],
    };
  },
  async mounted() {
    const response = await fetch('http://127.0.0.1:5000/order', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    this.orders = data;
  },
  created() {
    this.filteredOrders = this.orders; // 初始化时显示所有订单  
  },
  methods: {
    filterOrders(status) {
      if (status === 'all') {
        this.filteredOrders = this.orders; // 显示所有订单  
      } else {
        this.filteredOrders = this.orders.filter(order => order.status === status); // 根据状态筛选订单  
      }
      this.activeTab = status; // 更新当前状态  
    },
    confirmPayment(orderId) {
      // 找到对应的订单并更新状态  
      const order = this.orders.find(order => order.orderId === orderId);
      if (order) {
        order.status = '待发货'; // 修改状态为待发货  
        alert(`确认付款: ${orderId}, 订单状态已更新为: ${order.status}`);
        this.filterOrders(this.activeTab); // 重新筛选，更新显示  
      }
    },
    confirmReceipt(orderId) {

      // 找到对应的订单并更新状态  
      const order = this.orders.find(order => order.orderId === orderId);
      if (order) {
        order.status = '已完成'; // 修改状态为待发货  
        alert(`确认收货: ${orderId}, 订单状态已更新为: ${order.status}`);
        this.filterOrders(this.activeTab); // 重新筛选，更新显示  
      }
    },
  },
};  
</script>

<style scoped>
.my-orders {
  padding: 20px;
}

.orders-header {
  margin-bottom: 20px;
}

.no-cursor {
  cursor: default;
  /* 设置光标为默认状态 */
}

.filter-buttons {
  margin-bottom: 20px;
}
</style>