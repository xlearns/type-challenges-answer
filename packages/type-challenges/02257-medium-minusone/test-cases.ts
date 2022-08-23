import type { Equal, Expect } from "@type-challenges/utils";
type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<900>; // 54

type cases = [
	Expect<Equal<MinusOne<1>, 0>>,
	Expect<Equal<MinusOne<55>, 54>>,
	Expect<Equal<MinusOne<3>, 2>>,
	Expect<Equal<MinusOne<100>, 99>>,
	// @ts-ignore ts递归乘数最大为1000
	Expect<Equal<MinusOne<1101>, 1100>>
];
