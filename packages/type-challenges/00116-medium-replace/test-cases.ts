import type { Equal, Expect } from "@type-challenges/utils";

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'

type test = Replace<"foobarbar", "", "foo">;

type cases = [
	Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
	Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
	Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
	Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
	Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
	Expect<Equal<Replace<"", "", "">, "">>
];
