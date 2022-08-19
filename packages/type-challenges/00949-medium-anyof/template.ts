type unino = 0 | false | "";
type isBoolean<T> = T extends unino
	? false
	: T extends []
	? false
	: T extends Record<string, never>
	? false
	: true;

type AnyOf<T> = T extends [infer U, ...infer V]
	? isBoolean<U> extends true
		? true
		: AnyOf<V>
	: false;

namespace ts00949 {
	/**
	 * @description 分析：
	 * 判断如果值是他们0|false|''|[]|{}其中得一个则返回false否则返回true
	 * 遍历数组通过infer取到数组得每一项并传到判断函数中，如果是true则直接返回true，如果是false则继续遍历下一项
	 * 递归结束直接返回false因为此时并没有任何一项满足true
	 */
	type unino = 0 | false | "";
	type isBoolean<T> = T extends unino
		? false
		: T extends []
		? false
		: T extends Record<string, never>
		? false
		: true;

	type AnyOf<T> = T extends [infer U, ...infer V]
		? isBoolean<U> extends true
			? true
			: AnyOf<V>
		: false;

	type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
	type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
}
