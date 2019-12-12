<template>
  <div>
    <h1>insertAtCursor</h1>
    <p>插入文本, 在光标处插入指定的文本</p>
    <div>示例:</div>
    <input type="textarea" id="textarea"/>
    <button @click="handle">xue</button>

    <MarkdownPreview :initialValue="readme" v-highlight="readme"/>
  </div>
</template>

<script>
import {insertAtCursor} from 'library/index.js'
import readme from './index.md'
import { MarkdownPreview } from 'vue-meditor'
export default {
  components: {
    MarkdownPreview
  },
  data(){
    return {
      readme
    }
  },
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
#editor {
    margin: auto;
    width: 80%;
    height: 580px;
    margin-top: 5rem;
  }
</style>
