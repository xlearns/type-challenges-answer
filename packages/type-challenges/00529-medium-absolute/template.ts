type Absolute<T extends string | number | bigint | boolean | null | undefined> =
	`${T}` extends `${infer A}${infer B}`
		? A extends "-"
			? `${B}`
			: `${T}`
		: never;
