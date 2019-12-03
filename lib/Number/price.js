// 加 ¥
function formatPrice(price, symbol = "¥ ") {
  return symbol + this.filterPrice(price)
}
// 分转成元
//小数位为0直接显示整数，有一位显示一位，有多位显示两位
function filterPrice(data) {
  if(typeof data === 'string'){
    data = Number(data)
  }
  if (typeof data !== 'number' || isNaN(data) === true) {
    console.error('Please enter number type')
    return '0'
  }
  var yuan = Number(data / 100);
  var fixed0 = yuan.toFixed(0);
  var fixed1 = yuan.toFixed(1);
  var fixed2 = yuan.toFixed(2);

  if (Number(fixed0) == Number(fixed1) && Number(fixed1) == Number(fixed2)) {
    return fixed0;
  } else if (Number(fixed0) != Number(fixed1) && Number(fixed1) == Number(fixed2)) {
    return fixed1;
  } else {
    return fixed2;
  }
}

export default {
  formatPrice,
  filterPrice
}