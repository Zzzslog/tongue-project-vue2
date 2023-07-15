<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#334056"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
  >
  <div style="
        width:150px;
        height: 80px;
        position: relative;
        margin-left: 20px;
        margin-top:30px">
    <img src="../assets/见微logo.png" width="150px" style="  position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;">
  </div>
  
  <h3>{{isCollapse? '舌诊':'舌 象 诊 断 系 统'}}</h3>
  <el-menu-item  v-for="item in noChildren" :key="item.name" :index="item.name">
    <i :class="`el-icon-${item.icon}`"></i>
    <span slot="title">{{ item.label }}</span>
  </el-menu-item>
  <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
    <template slot="title">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{item.label}}</span>
    </template>
    <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
      <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100vh;
  h3{
    color:#fff;
    text-align: center;
    line-height: 48px;
    font-size: 25px;
    font-weight: 400;
    font-family:STKaiti;
  }
  .el-menu-item{
    height: 65px;
    line-height: 65px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/diagnosis",
          name: "diagnosis",
          label: "舌象诊断",
          icon: "camera-solid",
          url: "Diagnosis/Diagnosis",
        },
        {
          path: "/news",
          name: "news",
          label: "健康简讯",
          icon: "news",
          url: "News/News",
        },
        {
          path: "/talk",
          name: "talk",
          label: "讨论专栏",
          icon: "chat-dot-square",
          url: "Talk/Talk",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "首页",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "首页",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  //进行数据过滤
  computed:{
    //无子菜单
    noChildren() {
        return this.menuData.filter(item => !item.children)
    },
    //有子菜单
    hasChildren(){
        return this.menuData.filter(item => item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
};
</script>
<style lang="less" scoped>
  .el-menu{
    border-right:none;
  }
</style>