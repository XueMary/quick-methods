<template>
  <div>
    <h1>copy</h1>
    <input type="text" :value="value" @input="v=>value=v.target.value">
    <button @click="copy">please click my copy input value</button>
  </div>
</template>

<script>
import {copy} from 'library/index.js'
export default {
  data(){
    return{
      value: 'xue ji hong copy method'
    }
  },
  methods:{
    copy(){
      copy(this.value)
    },
  }
}
</script>

<style>

</style>
