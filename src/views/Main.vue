<template>
    <div>
        <el-container>
        <el-aside width="auto">
            <CommonAside></CommonAside>
        </el-aside>
          <el-container>
                <el-header>
                  <CommonHeader></CommonHeader>
                </el-header>
                <el-main>
                     <!-- 路由出口 -->
                    <!-- 路由匹配到的组件会渲染此处 -->
                    <router-view></router-view>
                </el-main>
          </el-container>
        </el-container>
    </div>
</template>
  
  <style>
   
  </style>
  
  <script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
export default {
      data(){
        return{}
      },
      components:{
        CommonAside,
        CommonHeader
      }
}
</script>
<style>
.el-header{
  padding: 0;
}
</style>