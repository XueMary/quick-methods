
// 常用与点击按钮复制文本 
/**
 * 
 * @param {eleemnt} element 
 * @param {string} target 
 * @param {string} value 
 */
function insertAtCursor(element, target, value) {
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