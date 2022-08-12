type AppendArgument<A, B> = A extends (...args: infer S) => infer RES
	? (...args: [...S, B]) => RES
	: never;
