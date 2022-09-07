type Reverse<T extends unknown[]> = T extends [infer Head, ...infer Tail]
	? [...Reverse<Tail>, Head]
	: [];

type FlipArguments<T extends Function> = T extends (
	...args: [...infer ArgsType]
) => infer ReturnType
	? (...args: Reverse<ArgsType>) => ReturnType
	: never;
