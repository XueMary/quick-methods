```
<template>
  <div>
    <input type="text" v-model="value" >
    <span>{{price}}</span>
  </div>
</template>

<script>
import { filterPriceToFen } from "quick-methods";
export default {
  computed: {
    price(){
      return filterPriceToFen(this.value)
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