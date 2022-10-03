type Length<T extends any[]> = T["length"];

type GreaterThan<
  A extends number,
  B extends number,
  N extends any[] = []
> = Length<N> extends A
  ? false
  : Length<N> extends B
  ? true
  : GreaterThan<A, B, [...N, any]>;
