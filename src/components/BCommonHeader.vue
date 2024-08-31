<template>
  <div class="header-content">
    <div class="l-content">
    </div>
    
    <div class="center-content">
      <span class="title">商品后台管理系统</span>
    </div>
    
    <div class="r-content">
      <!-- 右侧区域，显示头像和名字 -->

    </div>
  </div>
</template>

<script setup>
/* 这里可以添加组件的逻辑，例如事件处理 */
</script>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #545c64;
  height: 60px;
  
}

/* .l-content {
  /* 左侧样式，可根据需求调整 */


.center-content {
  flex-grow: 1;
  text-align: center;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: aliceblue;
}

.r-content {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-name {
  font-size: 16px;
}
</style>
