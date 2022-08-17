import type { Equal, Expect } from "@type-challenges/utils";
type foo = {
	name: string;
	age: string;
};
type coo = {
	age: number;
	sex: string;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

type Foo = {
	a: number;
	b: string;
};
type Bar = {
	b: number;
	c: boolean;
};

type test = Merge<Foo, Bar>;
type cases = [
	Expect<
		Equal<
			Merge<Foo, Bar>,
			{
				a: number;
				b: number;
				c: boolean;
			}
		>
	>
];
