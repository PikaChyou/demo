<template>  
    <div class="container mx-auto my-5">  
      <h1 class="text-2xl font-bold mb-4">商品展示</h1>  

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
        <div v-for="product in products" :key="product.id" class="border rounded p-4 shadow">  
          <h2 class="text-lg font-semibold">{{ product.name }}</h2>  
          <p>价格: {{ product.price }} 元</p>  
          <button   
            @click="addToCart(product)"  
            class="bg-blue-500 text-white p-2 mt-2">  
            添加到购物车  
          </button>  
        </div>  
      </div>  

      <h2 class="text-xl font-bold mt-6">购物车</h2>  
      <ul>  
        <li v-for="item in cart" :key="item.id">  
          {{ item.name }} - {{ item.price }} 元  
        </li>  
      </ul>  
      <p class="text-lg font-semibold">总计: {{ totalPrice }} 元</p>  
    </div>  
  </template>  

  <script>  
  import { ref } from "vue";  

  export default {  
    name: "ProductPage",  
    setup() {  
      const products = ref([  
        { id: 1, name: "商品 A", price: 100 },  
        { id: 2, name: "商品 B", price: 150 },  
        { id: 3, name: "商品 C", price: 200 },  
        { id: 4, name: "商品 D", price: 250 },  
        { id: 5, name: "商品 E", price: 300 },  
      ]);  

      const cart = ref([]);  

      const addToCart = (product) => {  
        cart.value.push(product);  
      };  

      const totalPrice = computed(() => {  
        return cart.value.reduce((total, item) => total + item.price, 0);  
      });  

      return {  
        products,  
        cart,  
        addToCart,  
        totalPrice,  
      };  
    },  
  };  
  </script>  

  <style scoped>  
  .container {  
    max-width: 1200px;  
    margin: 0 auto;  
    padding: 20px;  
  }  
  </style>  