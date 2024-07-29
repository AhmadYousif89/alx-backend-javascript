export const weakMap = new WeakMap();

/**
 * @param {{ protocol: 'http', name: 'getUsers' }} endpoint
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
}
