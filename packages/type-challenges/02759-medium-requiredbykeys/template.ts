// type RequiredByKeys<T, N extends string> = {
// 	[K in keyof T]: T[K];
// };

// your answers
type Merge<T> = {
	[K in keyof T]: T[K];
};

type RequiredByKeys<T, K = keyof T> = Merge<
	{
		[p in keyof T as p extends K ? never : p]: T[p];
	} & {
		[p in keyof T as p extends K ? p : never]-?: T[p];
	}
>;

namespace ts2759 {
	/**
	 * 分析：
	 * 1.如果T是可选的则{[K in keyof T]:T[K]}也是可以选的。不可选也是同理
	 * 2.遍历2次，取交集，第一次为可选如果T中有K则不做任何处理既never，第二次为不可选。其它情况都不做处理既never，只有当K的时候在处理
	 */
}
