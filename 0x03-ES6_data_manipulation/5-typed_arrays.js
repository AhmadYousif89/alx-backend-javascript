export default function createInt8TypedArray(length, position, value) {
  // If adding the value is not possible the error Position outside range should be thrown.
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const DVB = new DataView(new ArrayBuffer(length), 0, length);
  DVB.setInt8(position, value);
  return DVB;
}
