<template>
  <div>
    <h1>insertAtCursor</h1>
    <p class="dec">插入文本, 在光标处插入指定的文本</p>
    <BaseTemplete class="base-templete">
      <template slot="title">
        示例:
      </template>
      <template slot="content">
        <input type="textarea" id="textarea">
        <button @click="handle">点击插入指定文本到光标处</button>
      </template>
      <template slot="code">
        <MarkdownPreview :initialValue="readme" v-highlight="readme"/>
      </template>
    </BaseTemplete>
    <MarkdownPreview :initialValue="table" v-highlight="table"/>
  </div>
</template>

<script>
import { insertAtCursor } from "library/index.js";
import readme from "./index.md";
import table from "./table.md";
import { MarkdownPreview } from "vue-meditor";
import BaseTemplete from "@/components/BaseTemplete";
export default {
  components: {
    MarkdownPreview,
    BaseTemplete
  },
  data() {
    return {
      readme,
      table,
      string: 'hello'
    };
  },
  methods: {
    handle() {
      let element = document.querySelector("#textarea");
      element.value = insertAtCursor(element, this.string);
    }
  }
};
</script>

<style>
#editor {
  margin: auto;
  width: 80%;
  height: 580px;
  margin-top: 5rem;
}
.base-templete{
  margin-bottom: 20px;
}
.dec{
  margin-bottom: 40px;
}
</style>
