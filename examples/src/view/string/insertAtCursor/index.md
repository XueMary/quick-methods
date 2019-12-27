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
        let string = 'hello'
        element.value = insertAtCursor(element, string)
      }
    }
  }
</script>

<style>

</style>
```