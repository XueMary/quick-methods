export function getObject(option, value, key = 'label'){
  let obj = null
  option.some(item=>{
    if(item[key]===value){
      obj = item
      return true
    }
  })
  return obj
}

export default {
  getObject
}