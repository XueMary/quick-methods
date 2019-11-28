<template>
  <div>
    <h1>copy</h1>
    <p>拷贝文本 将需要拷贝的文本传入函数中, 文本将被添加到 剪貼本中</p>
    <div>示例:</div>
    <input type="text" :value="value" @input="v=>value=v.target.value">
    <button @click="copy">please click my copy input value</button>

  </div>
</template>

<script>
import { copy } from "library/index.js";
export default {
  data() {
    return {
      value: "xue ji hong copy method"
    };
  },
  methods: {
    copy() {
      copy(this.value);
    },
  }
};
</script>

<style>
</style>
