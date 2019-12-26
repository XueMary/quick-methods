<template>
  <div>
    <h1>filterPriceToFen</h1>
    <p>将元为单位的价格转为分</p>
    <BaseTemplete>
      <template slot="title">示例:</template>
      <template slot="content">
        <input type="text" v-model="value" >
        <span>{{price}}</span>
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
import { filterPriceToFen } from "library/index.js";
import readme from "./index.md";
import table from "./table.md";
export default {
  components: {
    BaseTemplete,
    MarkdownPreview
  },
  computed: {
    price(){
      return filterPriceToFen(this.value)
    }
  },
  data() {
    return {
      value: 1000,
      readme,
      table
    };
  },
};
</script>

<style>
</style>
