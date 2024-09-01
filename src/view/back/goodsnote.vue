<template>  
  <div class="my-orders">  
    <el-row>  
      <el-col>  
        <el-card>  
          <div class="orders-header">  
            <h2>全部订单</h2>  
          </div>  
          <div class="filter-buttons">  
            <el-button @click="filterOrders('待付款')">待付款</el-button>  
            <el-button @click="filterOrders('待发货')">待发货</el-button>  
            <el-button @click="filterOrders('已发货')">已发货</el-button>  
            <el-button @click="filterOrders('已完成')">已完成</el-button>  
            <el-button @click="filterOrders('all')">全部</el-button>  
          </div>  
          <el-table :data="filteredOrders" style="width: 100%">  
            <el-table-column prop="orderTime" label="时间" />  
            <el-table-column prop="orderId" label="订单号" />  
            <el-table-column prop="product" label="商品" />  
            <el-table-column prop="price" label="单价" />  
            <el-table-column prop="quantity" label="数量" />  
            <el-table-column prop="total" label="实付款" />  
            <el-table-column prop="status" label="交易状态" >  
            <!-- <el-table-column label="操作">  
              <template #default="scope">  
                <el-button  
                  v-if="scope.row.status === '待付款'"  
                  type="primary"  
                  @click="confirmPayment(scope.row.orderId)"  
                >  
                  确认付款  
                </el-button>  
                <el-button  
                  v-if="scope.row.status === '已发货'"  
                  type="success"  
                  @click="confirmReceipt(scope.row.orderId)"  
                >  
                  确认收货  
                </el-button>  
              </template>   -->
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
      orders: [  
        {  
          orderTime: '03-11 20:02',  
          orderId: '50',  
          product: '空气净化器',  
          price: 999,  
          quantity: 2,  
          total: 1998,  
          status: '待付款',  
        },  
        {  
          orderTime: '03-11 19:40',  
          orderId: '48',  
          product: '网易智能电子秤',  
          price: 59,  
          quantity: 1,  
          total: 59,  
          status: '已发货',  
        },  
        {  
          orderTime: '03-11 19:39',  
          orderId: '47',  
          product: 'IH电饭煲',  
          price: 499,  
          quantity: 1,  
          total: 499,  
          status: '待发货',  
        },  
        {  
          orderTime: '03-11 19:38',  
          orderId: '46',  
          product: '智能手表',  
          price: 199,  
          quantity: 1,  
          total: 199,  
          status: '已完成',  
        },  
      ],  
      filteredOrders: [], // 存储筛选后的订单  
    };  
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
  cursor: default; /* 设置光标为默认状态 */  
}  
.filter-buttons {  
  margin-bottom: 20px;  
}  
</style>