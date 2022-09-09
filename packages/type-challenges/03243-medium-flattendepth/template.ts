type FlattenDepth<T, U = 1, C extends any[] = []> = C["length"] extends U
  ? T
  : T extends [infer A, ...infer B]
  ? A extends any[]
    ? [...FlattenDepth<A, U, [A, ...C]>, ...FlattenDepth<B, U, C>]
    : [A, ...FlattenDepth<B, U, C>]
  : T;
