export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || !startString || typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((str) => str && typeof str === 'string' && str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
