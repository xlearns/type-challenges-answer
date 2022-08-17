import type { Equal, Expect } from "@type-challenges/utils";
type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

type cases = [
	Expect<Equal<StringToUnion<"">, never>>,
	Expect<Equal<StringToUnion<"t">, "t">>,
	Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
	Expect<
		Equal<
			StringToUnion<"coronavirus">,
			"c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
		>
	>
];
