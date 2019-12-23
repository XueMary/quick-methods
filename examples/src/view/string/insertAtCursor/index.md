```
<template>
  <div>
    <input type="textarea" id="textarea"/>
    <button @click="handle">xue</button>
  </div>
</template>

<script>
  import {insertAtCursor} from 'quick-methods'
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
```