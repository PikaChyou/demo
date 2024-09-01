
<template>  
  <el-container>
      <el-header>
          <h1 class="text-2xl font-bold">订单记录</h1>
      </el-header>
      <el-main>
          <el-form :model="newOrder" class="mb-4">
              <el-form-item label="客户姓名" required>
                  <el-input v-model="newOrder.customerName" placeholder="客户姓名"></el-input>
              </el-form-item>
              <el-form-item label="订单金额" required>
                  <el-input v-model.number="newOrder.amount" type="number" placeholder="订单金额"></el-input>
              </el-form-item>
              <el-form-item label="状态">
                  <el-select v-model="newOrder.status">
                      <el-option label="已付款" value="已付款"></el-option>
                      <el-option label="待发货" value="待发货"></el-option>
                      <el-option label="已完成" value="已完成"></el-option>
                  </el-select>
              </el-form-item>
              <el-button type="primary" @click="addOrder">新增订单</el-button>
          </el-form>

          <el-table :data="orders" style="width: 100%">
              <el-table-column prop="id" label="订单 ID" width="180"></el-table-column>
              <el-table-column prop="customerName" label="客户姓名" width="180"></el-table-column>
              <el-table-column prop="amount" label="订单金额" width="180">
                <template v-slot="scope">{{ scope.row.amount+'元' }} </template>  
              </el-table-column>
              <el-table-column prop="status" label="状态" width="180"></el-table-column>
              <el-table-column label="操作" width="180">
                  <template v-slot="scope">
                      <el-button type="danger" @click="deleteOrder(scope.row.id)">删除</el-button>
                  </template>
              </el-table-column>
          </el-table>
      </el-main>
  </el-container>
</template>

<script>  
import { ref } from "vue";  

export default {  
  name: "OrderRecord",  
  setup() {  
      const orders = ref([  
          { id: 1, customerName: "张三", amount: 100, status: "已付款" },  
          { id: 2, customerName: "李四", amount: 150, status: "待发货" },  
          { id: 3, customerName: "王五", amount: 200, status: "已完成" },  
      ]);  

      const newOrder = ref({  
          customerName: "",  
          amount: 0,  
          status: "已付款",  
      });  

      const addOrder = () => {  
          if (newOrder.value.customerName && newOrder.value.amount > 0) {
              const orderId = orders.value.length ? orders.value[orders.value.length - 1].id + 1 : 1;  
              orders.value.push({ id: orderId, ...newOrder.value });  
              newOrder.value = { customerName: "", amount: 0, status: "已付款" }; // Reset form  
          } else {
              alert("请填写客户姓名和订单金额");
          }
          console.log(111)
      };  

      const deleteOrder = (id) => {  
          orders.value = orders.value.filter(order => order.id !== id);  
      };  

      return {  
          orders,  
          newOrder,  
          addOrder,  
          deleteOrder,  
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
