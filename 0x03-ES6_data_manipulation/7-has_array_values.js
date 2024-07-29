export default function hasValuesFromArray(set, list) {
  return list.every((value) => set.has(value));
}
