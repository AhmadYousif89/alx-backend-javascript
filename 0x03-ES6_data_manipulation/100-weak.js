export const weakMap = new WeakMap();

/**
 * @param {{ protocol: 'http', name: 'getUsers' }} endpoint
 */
export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  if (!count) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, count + 1);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
