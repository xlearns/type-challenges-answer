type DropChar<
	T extends string,
	R extends string
> = T extends `${infer left}${R}${infer rest}`
	? `${left}${DropChar<rest, R>}`
	: T;
