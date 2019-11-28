<template>
  <div class="header">
    <h1 class="title">quick-methods</h1>
    <address class="address">小默</address>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 60px;
  line-height: 40px;
  padding: 10px 60px;
  box-sizing: border-box;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease-in-out;
}
.title{
  padding: 0;
  margin: 0;
}
.address{
  font-style: normal;
}
</style>
