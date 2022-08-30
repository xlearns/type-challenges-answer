type OmitByType<A, B> = {
	[K in keyof A as A[K] extends B?never:K]: A[K];
};
