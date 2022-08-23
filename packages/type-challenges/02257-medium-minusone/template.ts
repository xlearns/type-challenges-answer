type NumberToArray<
	N extends number,
	C extends number[] = []
> = C["length"] extends N ? C : NumberToArray<N, [...C, 0]>;

type MinusOne<T extends number> = NumberToArray<T> extends [infer A, ...infer B]
	? [...B]["length"]
	: never;

namespace ts2257 {
	/**
	 *  1.转换数组
	 *  2.数组移除一项
	 *  3.数组的长度
	 */

	// 1 ts递归最大乘数为1000
	type NumberToArray<
		N extends number,
		C extends number[] = []
	> = C["length"] extends N ? C : NumberToArray<N, [...C, 0]>;

	type test_1 = NumberToArray<10>;

	// 2
	type Removed<T extends any[]> = T extends [infer A, ...infer B]
		? [...B]
		: never;
	type test_2 = Removed<test_1>;

	//3
	type Len<T extends any[]> = T["length"];
	type test_3 = Len<test_2>;
}

/**
 * 
type MinusOne<T extends number> = CountToT<`${T}`> extends [...infer M1, 1] ? M1['length'] : 0

type CountToT<T extends string, Count extends 1[] = []> =
  T extends `${infer First}${infer Rest}` ? (
    CountToT<Rest, N<Count>[keyof N & First]>
  ) : Count

type N<T extends 1[] = [], Rest extends 1[] = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]> = {
  '0': [...Rest],
  '1': [...Rest, 1],
  '2': [...Rest, 1, 1],
  '3': [...Rest, 1, 1, 1],
  '4': [...Rest, 1, 1, 1, 1],
  '5': [...Rest, 1, 1, 1, 1, 1],
  '6': [...Rest, 1, 1, 1, 1, 1, 1],
  '7': [...Rest, 1, 1, 1, 1, 1, 1, 1],
  '8': [...Rest, 1, 1, 1, 1, 1, 1, 1, 1],
  '9': [...Rest, 1, 1, 1, 1, 1, 1, 1, 1, 1],
}
 * 
 */
