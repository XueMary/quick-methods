

## params
参数名|描述|类型|可选值|默认值
--|--|--|--|--
element|需要将文本插入的元素|string|--|--
value|需要插入的值|string|--|--

```
  ⚠️注意: element 切勿使用虚拟dom, 以vue为例, this.$refs.xxx  虚拟dom只是js数据,还未有真实dom的一些操作和数据,
  本方法需要获取光标的位置,来判断需要插入的位置,请使用 document.querySelector("#textarea")等js原生方法获取dom对象
```