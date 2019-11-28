<template>
  <div class="menu">
    <div v-for="(route, index) in routes" :key="index">
      <div :class="['menu-h2', {'active':active[0]===route.meta.index}]">{{route.meta.title}}</div>
      <div @click="handleClick(children)" :class="['menu-h3', {'active':active===children.meta.index}]" v-for="(children,index) in route.children" :key="index">
        {{children.meta.title}}
      </div>
    </div>
  </div>
</template>

<script>
import routes from '@/routes'
export default {
  data(){
    return{
      routes,
      active: ''
    }
  },
  methods: {
    handleClick(route){
      this.active = route.meta.index
      this.$router.push(route.path)
    }
  }
};
</script>

<style scoped>
.menu {
  box-sizing: border-box;
  width: 260px;
  padding: 35px 0px 60px 20px;
  height: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease-in-out;
}
.menu-h2{
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}
.menu-h3{
  margin-left: 1em;
  font-size: 18px;
  line-height: 2;
  cursor: pointer;
}
.active{
  color: #42b983
}
</style>
