import price from '../lib/Number/price'

test('价格分转元', () => {
  expect(price.formatPrice(100)).toBe("¥ 1");
  expect(price.formatPrice(10011)).toBe("¥ 100.11");
  expect(price.formatPrice(100, '+¥ ')).toBe("+¥ 1");
  expect(price.formatPrice(10011, '-¥ ')).toBe("-¥ 100.11");
});

test('价格分转元', () => {
  expect(price.filterPrice(100)).toBe('1');
  expect(price.filterPrice(110)).toBe('1.1');
  expect(price.filterPrice()).toBe('0');
  expect(price.filterPrice(10011)).toBe('100.11');
  expect(price.filterPrice('10')).toBe('0.1');
  expect(price.filterPrice('10asb')).toBe('0');
});

test('价格元转分', () => {
  expect(price.filterPriceToFen(100)).toBe("10000");
  expect(price.filterPriceToFen(0.01)).toBe("1");
  expect(price.filterPriceToFen(0.1)).toBe("10");
  expect(price.filterPriceToFen('0.1')).toBe("10");
  expect(price.filterPriceToFen('¥ 0.1', '¥ ')).toBe("10");
});