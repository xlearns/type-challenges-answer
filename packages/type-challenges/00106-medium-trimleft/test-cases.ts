import type { Equal, Expect } from "@type-challenges/utils";

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '

type cases = [
	Expect<Equal<TrimLeft<"str">, "str">>,
	Expect<Equal<TrimLeft<" str">, "str">>,
	Expect<Equal<TrimLeft<"        str">, "str">>,
	Expect<Equal<TrimLeft<"     str">, "str">>,
	Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
	Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
	Expect<Equal<TrimLeft<"">, "">>,
	Expect<Equal<TrimLeft<" \n\t">, "">>
];
