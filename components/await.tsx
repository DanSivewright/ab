type Awaited<T> = T extends PromiseLike<infer U> ? U : T

export async function Await<T>({
  promise,
  children,
}: {
  promise: Promise<T> | Promise<T>[]
  children: (result: Awaited<T> | Awaited<T>[]) => JSX.Element
}) {
  const results = Array.isArray(promise)
    ? await Promise.all(promise)
    : await promise

  return children(results as Awaited<T> | Awaited<T>[])
}
