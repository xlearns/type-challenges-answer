type ObjectEntries<T, K = keyof T> = K extends keyof T
	? [K, [T[K]] extends [undefined] ? undefined : Exclude<T[K], undefined>]
	: never;

namespace ts2946 {
	// 1. object to union
	type ObjectToUnion<T, K = keyof T> = K extends keyof T ? [K, T[K]] : never;
	// 2. 排除undefined情况
	//
	/**
	 * @warning undefined、null 判断相当要用[]
	 * @description
	 * Partial : type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
	 * Exclude  【剔除】: type Exclude<T, U> = T extends U ? never : T
	 * Required 【必填项】: type Required<T> = { [P in keyof T]-?: T[P]; }
	 */

	type excludUndefined<T, K = keyof T> = K extends keyof T
		? [K, [T[K]] extends [undefined] ? undefined : T[K]]
		: never;
	type test = excludUndefined<{ key: undefined }>;
}
