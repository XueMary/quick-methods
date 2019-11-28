
// /**
//  * 
//  * @param {Object} options 
//  * @param {Number} number 
//  * @param {Number} count 
//  * @param {Number} fixed 
//  * @param {String} symbol 
//  */


// const defaultOption = {
//   number: 0,
//   count: 0,
//   fixed: undefined,
//   symbol: ''
// }

// // 数字转字符串整数
// function numberToString(number) {
//   if (typeof number !== 'number') {
//     console.error('Please enter number type')
//     return false
//   }
//   number = number.toString()
//   let len = number.length
//   let fixedLen = 0
//   let index = number.indexOf('.')
//   number = number.replace('.', '')

//   if (index !== -1) {
//     fixedLen = len - 1 - index
//   }

//   return {
//     number,
//     fixedLen,
//     index
//   }
// }

// // 字符串转数字 回复原数字
// function stringToNumber(number, fixed) {
//   if (typeof number !== 'string') {
//     console.error('Please enter a string type')
//     return false;
//   }
//   if (isNaN(Number(number))) {
//     console.error('Please enter a string that can be converted to a number')
//     return false;
//   }

//   let num = numberToString(+number)

//   if (num.fixedLen) {
//     let len = num.number.length - num.fixedLen

//     if (len <= 0) {
//       let str = '0.'
//       len = Math.abs(len)
//       for (let i = 0; i < len; i++) {
//         str += '0'
//       }
//       num.number = `${str}${num.number}`
//     } else {
//       let star = num.number.substring(0, len)
//       let end = num.number.substring(len)
//       num.number = `${star}.${end}`
//     }
//   }
//   if (fixed) {
//     num.number = +num.number
//     num.number = num.number.toFixed(fixed)

//     return parseFloat(num.number)
//   }

//   if (num.fixedLen > 0) {
//     return parseFloat(num.number)
//   }

//   return Number(num.number)
// }

// // function offsetPoint(str, offset) {
// //   if (typeof str === 'number') {
// //     str = str.toString()
// //   }
// //   if (typeof str !== 'string' && typeof str !== 'number') {
// //     console.error('Please enter string or number type')
// //     return false
// //   }

// //   if(offset>0){
// //     let len = str.length
// //     let index = str.indexOf('.')
// //     if(index===-1){
// //       str = str*(offset*10)
// //     }else{
// //       index = index + offset
// //       str = str.replace('.', '')
// //       if(len>=index){

// //       }
// //     }
// //   }
// // }

// // 乘
// // function multiply(options) {
// //   const newOption = Object.assign({}, defaultOption, options)
// //   let { number, count, fixed, symbol } = newOption
// //   let total = 0

// //   let num = numberToString(number)

// //   let countNum = numberToString(count)

// //   let fixedLen = num.fixedLen + countNum.fixedLen

// //   total = num.number * countNum.number
// //   if (fixedLen) {
// //     total = divide({ number: total, count: (fixedLen * 10) })
// //   }
// //   if (fixed !== undefined && typeof fixed === 'number') {
// //     total = total.toFixed(fixed)
// //   }

// //   if (symbol) {
// //     total = `${symbol} ${total}`
// //   }
// //   return total
// // }
// // 除
// // function divide(options) {

// //   const newOption = Object.assign({}, defaultOption, options)
// //   let { number, count, fixed, symbol } = newOption
// //   return number / count
// // }
// // 加
// function add(...args) {
//   let total = 0

//   for (let i = 0; i < args.length; i++) {
//     let number = args[i]
//     if (typeof number !== 'number' && typeof number !== 'string') {
//       console.error('Please enter number or string type')
//       return false
//     }
//     total = JSON.stringify(total)
//     number = JSON.stringify(number)
//     let aIndex = total.indexOf('.')
//     let aStar = null
//     let aEnd = null
//     console.warn(aStar, aEnd, aIndex)
//     if (aIndex !== -1) {
//       aStar = total.substring(0, aIndex)
//       aEnd = total.substring(aIndex + 1)
//     } else {
//       aStar = total
//       aEnd = '0'
//     }
    
//     let bIndex = number.indexOf('.')
//     let bStar = null
//     let bEnd = null
//     if (bIndex !== -1) {
//       bStar = number.substring(0, bIndex)
//       bEnd = number.substring(bIndex + 1)
//     } else {
//       bStar = number
//       bEnd = '0'
//     }


//     let star = Number(aStar) + Number(bStar)
//     let end = Number(aEnd) + Number(bEnd)

//     total = `${star}.${end}`
//   }
//   return total
// }
// // // 减
// // function minus(options) {
// //   const newOption = Object.assign(defaultOption, options)
// // }


// export default {
//   // multiply,
//   // divide,
//   add,
//   // minus,
//   numberToString,
//   stringToNumber
// }
