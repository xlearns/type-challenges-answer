import type { Equal, Expect } from "@type-challenges/utils";
interface Todo {
	readonly title: string;
	readonly description: string;
	readonly completed: boolean;
}

type MutableTodo = Mutable<Todo>; // { title: string; description: string; completed: boolean; }

interface Todo1 {
	title: string;
	description: string;
	completed: boolean;
	meta: {
		author: string;
	};
}

type List = [1, 2, 3];

type cases = [
	Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
	Expect<Equal<Mutable<Readonly<List>>, List>>
];

type errors = [Mutable<"string">, Mutable<0>];
