export const weakMap = new WeakMap();

/**
 * @param {{ protocol: 'http', name: 'getUsers' }} endpoint
 */
export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}
