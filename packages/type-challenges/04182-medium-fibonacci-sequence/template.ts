type len = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
type Length<Array extends unknown[] = []> = Array["length"];
type StructureArr<
  N extends number = 0,
  ANS extends unknown[] = []
> = Length<ANS> extends N ? ANS : StructureArr<N, [...ANS, any]>;

// type Fibonacci<T> = T extends number ? len[StructureArr<T>] : never;
type unshift<T> = T extends [infer A, ...infer B] ? [...B] : [];
// type Fibonacci<T> = T extends number
//   ? unshift<StructureArr<T>>["length"] extends number
//     ? len<unshift<StructureArr<T>>["length"]>
//     : []
//   : never;

type Fibonacci<
  T extends number,
  N extends number[] = [1],
  Res extends number[] = [1],
  Cur extends number[] = [1]
> = N["length"] extends T
  ? Res["length"]
  : Fibonacci<T, [...N, 1], Cur, [...Res, ...Cur]>;
