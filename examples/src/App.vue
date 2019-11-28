<template>
  <div class="page">
    <Header class="header-box"/>
    <div class="content">
      <div class="menu"><Menu/></div>
      <div class="content-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/view/layout/Header'
import Menu from '@/view/layout/Menu'
export default {
  components: {
    Header,
    Menu
  }
}
</script>

<style scoped>
.page{
  height: 100%;
}
.header-box{
  position: fixed;
  width: 100%;
  box-sizing: border-box;
}
.content{
  display: flex;
  height: 100%;
  padding-top: 60px;
  box-sizing: border-box;
}
.content-page{
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll; 
}

.menu{
  height: 100%;
  overflow-y: scroll; 
}
</style>
