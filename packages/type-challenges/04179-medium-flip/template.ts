// { a: "x"; b: "y"; c: "z" }   {x: 'a', y: 'b', z: 'c'}
type Flip<T> = {
	[K in keyof T as T[K] extends
		| string
		| number
		| bigint
		| boolean
		| null
		| undefined
		? `${T[K]}`
		: never]: K;
};
