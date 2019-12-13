import arr from '../lib/Array/index'

test('通过一个属性查找对应内容', () => {
  expect(arr.getObject([{label: '123', value: 'ss'}], '123')).toEqual({label: '123', value: 'ss'})
  expect(arr.getObject([{label: '123', value: 'ss'}], '23')).toBe(null)
});