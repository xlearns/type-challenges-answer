import type { Equal, Expect } from "@type-challenges/utils";
type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

type cases = [Expect<Equal<TupleToUnion<Arr>, "1" | "2" | "3">>];
