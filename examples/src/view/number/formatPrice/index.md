```
<template>
  <div>
    <input type="text" v-model="value" >
    <span>{{price}}</span>
  </div>
</template>

<script>
import { formatPrice } from "quick-methods";
export default {
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

```