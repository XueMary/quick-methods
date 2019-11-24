
// 常用与点击按钮复制文本 
/**
 * 
 * @param {string} string 
 */
function copy(string) {

  if (typeof string !== 'string') {
    console.error('Please enter a string parameter')
    return false
  }

  let input = null
  input = document.getElementById('quick-input-select')

  if (input === null) {
    input = document.createElement('input')
    input.type = 'text'
    input.id = 'quick-input-select'
  }

  input.style.left = "-1000px";
  input.style.position = "absolute";

  document.body.appendChild(input)

  input.value = string
  input.select()
  if (document.execCommand) {
    return document.execCommand('copy')
  } else {
    console.error('Current browsers do not support exeCommand, please use chrome')
  }
  return false
}

export default copy