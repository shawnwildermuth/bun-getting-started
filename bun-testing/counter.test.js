const counter = require('./counter');

describe("simple tests", () => {
  test('test increment', () => {
    const beforeCount = counter.count;
    counter.increment()
    expect(counter.count).toBe(beforeCount + 1);
  });
  test('test double', () => {
    counter.increment()
    expect(counter.doubleCount()).toBe(counter.count * 2);
  });
});