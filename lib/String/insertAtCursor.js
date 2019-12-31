
// 常用与点击按钮复制文本 
/**
 * 
 * @param {element} element 
 * @param {string} value 
 */
function insertAtCursor(element, target, value) {
  if(value==undefined){
    // 方法写了多余的参数, 但以在使用,为了兼容老方法
    // 现在只需传入两个参数 element 与 value
    value = target
    target = element.value
  }
  
  if (element.selectionStart || element.selectionStart === 0) {
    var startPos = element.selectionStart;
    var endPos = element.selectionEnd;
    var diff = endPos - startPos;
    target =
      target.substring(0, startPos) +
      value +
      target.substring(endPos, target.length);

    setTimeout(() => {
      element.focus();
      var point = endPos + value.length - diff;
      element.setSelectionRange(point, point);
    });
  } else {
    target += value;
    element.focus();
  }
  return target;
}

export default insertAtCursor