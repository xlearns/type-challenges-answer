type K = string | number | symbol;

type TupleToNestedObject<T extends K[], U> = T extends [infer A, ...infer B]
	? A extends K
		? B extends K[]
			? { [J in A]: TupleToNestedObject<B, U> }
			: never
		: never
	: U;
