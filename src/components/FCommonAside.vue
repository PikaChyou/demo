<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>首页</span>
          </template>
          <el-menu-item-group title="订单信息">
            <router-link to="/mine2">
            <el-menu-item index="1-1">订单记录</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
           购物车
          </template>
          <el-menu-item-group title="订单信息">
            <router-link to="/mine2">
            <el-menu-item index="2-1">商品销售排行</el-menu-item>
          </router-link>
          <router-link to="/mine2">
            <el-menu-item index="2-2">商品销售情况可视化</el-menu-item>
          </router-link>
          <router-link to="/mine2">
            <el-menu-item index="2-3">商品销售推荐</el-menu-item>
          </router-link>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>我的</span>
          </template>
          <el-menu-item-group title="商户信息">
            <router-link to="/mine2">
            <el-menu-item index="3-1">商户信息</el-menu-item>
          </router-link>
          </el-menu-item-group>
        </el-sub-menu>
        <!-- <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>购物车</span>
          <el-menu-item-group title="销售情况">
            <el-menu-item index="2-1">商品销售排行</el-menu-item>
            <el-menu-item index="2-2">商品销售情况可视化</el-menu-item>
            <el-menu-item index="2-2">商品销售推荐</el-menu-item>
          </el-menu-item-group>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><icon-menu /></el-icon>
          <span>我的</span>
          <el-menu-item-group title="商户信息">
            <el-menu-item index="3-1">商户信息</el-menu-item>
          </el-menu-item-group>
        </el-menu-item> -->
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// 菜单高度和标题样式
.el-menu {
  height: 100vh;
  border-right: none;
  h3 {
    margin: 0;
    color: white;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}

.is-active{
  color:#ffd04b
}

a{
  text-decoration: none;
}

</style>


<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>