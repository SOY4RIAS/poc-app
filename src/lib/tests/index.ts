// @ts-nocheck

/**
 * @param {function} Component
 * @param {*} props
 * @returns {Promise<()=>JSX.Element>}
 */
export async function resolvedComponent<T>(
  Component: T,
  props
): Promise<() => JSX.Element> {
  const ComponentResolved = await Component(props);

  return () => ComponentResolved;
}
