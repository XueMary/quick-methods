```
<template>
  <div>
    <input type="text" :value="value" @input="v=>value=v.target.value">
    <button @click="copy">please click my copy input value</button>
  </div>
</template>

<script>
import { copy } from "quick-methods";
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

```