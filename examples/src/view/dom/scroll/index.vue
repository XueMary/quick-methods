<template>
  <div>
    <h1>bindScroll</h1>
    <p>滚动加载</p>
    <BaseTemplete>
      <template slot="title">示例:</template>
      <template slot="content">
        <div>
          <ul @scroll="scrls" class="scroll-box">
            <li v-for="item in arrs" :key="item">{{item}}</li>
          </ul>
        </div>
      </template>
      <template slot="code">
        <MarkdownPreview :initialValue="readme" v-highlight="readme"/>
      </template>
    </BaseTemplete>
    <MarkdownPreview :initialValue="table" v-highlight="table"/>
  </div>
</template>

<script>
import BaseTemplete from "@/components/BaseTemplete";
import { MarkdownPreview } from "vue-meditor";
import { bindScroll } from "library/index.js";
import readme from "./index.md";
import table from "./table.md";
export default {
  components: {
    BaseTemplete,
    MarkdownPreview
  },
  data() {
    return {
      readme,
      table,
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
    scrls(el) {
      bindScroll(el.target, this.loadMore, this.busy);
    }
  },
  mounted() {
    this.loadMore();
  }
};
</script>

<style scoped>
.scroll-box {
  height: 377px;
  overflow-y: scroll;
}
</style>
