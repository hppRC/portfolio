export function validateNotNull<T>(obj: T | null): T {
  if (!obj) {
    throw Error('null is not allowed');
  }
  return obj;
}
