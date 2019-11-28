<template>
  <div>
    <h1>insertAtCursor</h1>
    <p>插入文本, 在光标处插入指定的文本</p>
    <div>示例:</div>
    <input type="textarea" id="textarea"/>
    <button @click="handle">xue</button>
  </div>
</template>

<script>
import {insertAtCursor} from 'library/index.js'
export default {
  methods: {
    handle(){
      let element = document.querySelector('#textarea')
      let target = element.value
      let string = 'hello'
      element.value = insertAtCursor(element, target, string)
    }
  }
}
</script>

<style>

</style>
