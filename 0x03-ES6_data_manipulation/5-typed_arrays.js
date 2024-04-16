export default function createInt8TypedArray(length, position, value) {
  const arrBuffer = new ArrayBuffer(length);
  const createdType = new DataView(arrBuffer);

  try {
    createdType.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return createdType;
}
