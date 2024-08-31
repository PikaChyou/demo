<template>  
    <div class="container mx-auto my-5">  
      <h1 class="text-2xl font-bold mb-4">订单记录</h1>  
      
      <form @submit.prevent="addOrder" class="mb-4">  
        <input v-model="newOrder.customerName" type="text" placeholder="客户姓名" required class="border p-2 mr-2" />  
        <input v-model="newOrder.amount" type="number" placeholder="订单金额" required class="border p-2 mr-2" />  
        <select v-model="newOrder.status" class="border p-2 mr-2">  
          <option value="已付款">已付款</option>  
          <option value="待发货">待发货</option>  
          <option value="已完成">已完成</option>  
        </select>  
        <button type="submit" class="bg-blue-500 text-white p-2">新增订单</button>  
      </form>  

      <table class="min-w-full bg-white border border-gray-300">  
        <thead>  
          <tr>  
            <th class="py-2 px-4 border-b">订单 ID</th>  
            <th class="py-2 px-4 border-b">客户姓名</th>  
            <th class="py-2 px-4 border-b">订单金额</th>  
            <th class="py-2 px-4 border-b">状态</th>  
            <th class="py-2 px-4 border-b">操作</th>  
          </tr>  
        </thead>  
        <tbody>  
          <tr v-for="order in orders" :key="order.id">  
            <td class="py-2 px-4 border-b">{{ order.id }}</td>  
            <td class="py-2 px-4 border-b">{{ order.customerName }}</td>  
            <td class="py-2 px-4 border-b">{{ order.amount }} 元</td>  
            <td class="py-2 px-4 border-b">{{ order.status }}</td>  
            <td class="py-2 px-4 border-b">  
              <button @click="deleteOrder(order.id)" class="bg-red-500 text-white p-1">删除</button>  
            </td>  
          </tr>  
        </tbody>  
      </table>  
    </div>  
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
        const orderId = orders.value.length ? orders.value[orders.value.length - 1].id + 1 : 1;  
        orders.value.push({ id: orderId, ...newOrder.value });  
        newOrder.value = { customerName: "", amount: 0, status: "已付款" }; // 重置表单  
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