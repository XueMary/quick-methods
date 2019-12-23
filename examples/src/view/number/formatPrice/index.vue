<template>
  <div>
    <h1>formatPrice</h1>
    <p>将分为单位的价格转为元</p>
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
  </div>
</template>

<script>
import BaseTemplete from "@/components/BaseTemplete";
import { MarkdownPreview } from "vue-meditor";
import { formatPrice } from "library/index.js";
import readme from "./index.md";
export default {
  components: {
    BaseTemplete,
    MarkdownPreview
  },
  computed: {
    price(){
      return formatPrice(this.value)
    }
  },
  data() {
    return {
      value: 1000,
      readme
    };
  },
};
</script>

<style>
</style>
