```
<template>
  <div>
    <ul @scroll="scrls" class="scroll-box" ref="scroll">
      <li v-for="item in arrs" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { formatPrice } from "quick-methods";
export default {
  data() {
    return {
      arrs: [],
      busy: false
    };
  },
  methods: {
    // 请求
    getRequest() {
      let len = this.arrs.length;
      for (var i = len; i < len+20; i++) {
        this.arrs.push(i);
      }
    },
    // 加载更多模版
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        this.getRequest()
        this.busy = false;
      }, 1000);
    },
    scrls() {
      bindScroll(this.$refs.scroll, this.loadMore, this.busy);
    }
  },
  mounted() {
    this.loadMore();
  }
};
</script>

<style scoped>
.scroll-box{
  height: 377px;
  overflow-y: scroll;
}
</style>

```