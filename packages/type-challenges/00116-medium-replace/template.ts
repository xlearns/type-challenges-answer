type Replace<
	S extends string,
	From extends string,
	To extends string
> = S extends `${infer A}${From}${infer B}`
	? From extends ""
		? S
		: `${A}${To}${B}`
	: S;
