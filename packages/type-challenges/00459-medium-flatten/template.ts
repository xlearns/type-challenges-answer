type Flatten<T, S extends any[] = []> = T extends [infer A, ...infer B]
	? A extends any[]
		? Flatten<[...A, ...B], S>
		: Flatten<[...B], [...S, A]>
	: S;
