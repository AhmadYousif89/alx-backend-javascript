export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
