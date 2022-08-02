//方法一:T[number]
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content:~:text=Another%20example%20of%20indexing%20with%20an%20arbitrary%20type%20is%20using%20number%20to%20get%20the%20type%20of%20an%20array%E2%80%99s%20elements.%20We%20can%20combine%20this%20with%20typeof%20to%20conveniently%20capture%20the%20element%20type%20of%20an%20array%20literal%3A
// type TupleToUnion<T extends any[]> = T[number];

// ts中number类型是所有数字类型的超集，所以number类型可以被extends extends到任何类型上，而不仅仅是数字类型。

// type TupleToUnion<T> = T extends [...infer R] ? R : unknown;

// type TupleToUnion<T> = T extends [infer A,...infer R] ? A: unknown;

// 方法二: infer

// type TupleToUnion<T> = T extends (infer R)[] ? R : unknown;

// 方法三: infer

type TupleToUnion<T> = T extends [infer A, ...infer R]
	? A | TupleToUnion<R>
	: never;
