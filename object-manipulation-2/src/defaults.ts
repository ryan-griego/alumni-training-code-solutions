/* exported defaults */

function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  for (const property in source) {
    if (!(property in target)) {
      target[property] = source[property];
    }
  }
  return target;
}
