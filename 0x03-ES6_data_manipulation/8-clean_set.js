export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((str) => str && typeof str === 'string' && str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
