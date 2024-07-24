export default function divideFunction(numerator, denominator) {
  // eslint-disable-next-line no-useless-catch
  try {
    if (denominator === 0) throw Error('cannot divide by 0');
    return numerator / denominator;
  } catch (error) {
    throw error;
  }
}
