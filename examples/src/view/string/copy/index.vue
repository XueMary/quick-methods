<template>
  <div>
    <h1>copy</h1>
    <p>拷贝文本 将需要拷贝的文本传入函数中, 文本将被添加到 剪貼本中</p>
    <BaseTemplete>
      <template slot="title">示例:</template>
      <template slot="content">
        <input type="text" :value="value" @input="v=>value=v.target.value">
        <button @click="copy">点击复制文本</button>
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
import { copy } from "library/index.js";
import readme from "./index.md";
import table from "./table.md";
export default {
  components: {
    BaseTemplete,
    MarkdownPreview
  },
  data() {
    return {
      value: "xue ji hong copy method",
      readme,
      table
    };
  },
  methods: {
    copy() {
      copy(this.value);
    }
  }
};
</script>

<style>
</style>
