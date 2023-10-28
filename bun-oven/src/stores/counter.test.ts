import { expect, test } from 'vitest'
import { useCounterStore } from './counter'
import { createPinia } from 'pinia';

const store = useCounterStore(createPinia());

test('test increment', () => {
  const beforeCount = store.count;
  store.increment()
  expect(store.count).toBe(beforeCount + 1);
  expect(store.doubleCount).toBe(store.count * 2);
});