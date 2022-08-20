import type { Equal, Expect } from '@type-challenges/utils'
type case1 = IsUnion<string>  // false
type case2 = IsUnion<number>  // false
type case3 = IsUnion<string|number>  // true
type case4 = IsUnion<[string|number]>  // false


type cases = [
    Expect<Equal<IsUnion<string>, false>>,
    Expect<Equal<IsUnion<string | number>, true>>,
    Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
    Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
    Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
    Expect<Equal<IsUnion<{ a: string | number }>, false>>,
    Expect<Equal<IsUnion<[string | number]>, false>>,
    // Cases where T resolves to a non-union type.
    Expect<Equal<IsUnion<string | never>, false>>,
    Expect<Equal<IsUnion<string | unknown>, false>>,
    Expect<Equal<IsUnion<string | any>, false>>,
    Expect<Equal<IsUnion<string | 'a'>, false>>,
    Expect<Equal<IsUnion<never>, false>>,
  ]
  