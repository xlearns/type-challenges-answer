/**
 * type MakesSense<T> = T extends never ? 'yes' : 'no'
 * type ExtendsNever<T> = [T] extends [never] ? 'yes' : 'no'
 * type never1 = ExtendsNever<never>  // yes
 * type never2 = MakesSense<never>  // never
 * 为什么never类型要用[]去判断？
 * never是一个联合类型，一个为空的联合类型，当作泛型传入后因为一个成员也没有也就不需要计算了直接返回never
 * 也就是如果继续使用Union extends xxx 的形式就又 Distribute 分支了, 所以这里把传入[U] 整体进条件
 * 参考：https://www.zhihu.com/question/470581497
 * */

type Permutation<U, C = U> = [U] extends [never]
	? []
	: U extends C
	? [U, ...Permutation<Exclude<C, U>>]
	: never;

/**
 * @description 分析
 */
namespace t00296 {
	type Uni = "A" | "B" | "C";
	// STEP1: 利用 Distributive Conditional Types 特性,把 Union 转换成 Array, 至于这里 extends 什么并不太重要, 只要条件为真,先用 any 好了
	// 要注意, 这里产生分支的条件是 extends 表达式, 表达式中的 U 是联合类型的每一个分支, 相当于被map
	type S1<U> = U extends any ? [U] : never;
	type P1 = S1<Uni>; // ['A']|['B']|['C']
	// STEP2: 观察一下,只是拿到了首个字母, 如果要继续拿后面的两个, 很显然需要loop, Type Space里的loop通常通过循环调用. 或者想一下如果是 function 该怎么写, 见
	// 然后上面的式子里U被map拆掉了,那么我们还需要一份完整的copy,用于之后继续传递, 所以增加一个C=U, 之后我们填上 S2<Exclude<C,U>>, 看第一项等于把[B, C]传入下一次循环
	type S2<U, C = U> = U extends any ? [U, S2<Exclude<C, U>>] : never;
	type P2 = S2<Uni>; //["A", ["B", ["C", never]] | ["C", ["B", never]]] | ["B", ["A", ["C", never]] | ["C", ["A", never]]] | ["C", ["A", ["B", never]] | ["B", ["A", never]]]
	// STEP3: 观察一下结果, 是拓成了 6 项, 但每项的内容不对, 而且里面有 never, 试着想办法把 never 拿掉, 怎么拿掉呢? 试着再加一级 extends,
	//注意, 如果这里还是用 Union extends xxx 的形式就又 Distribute 分支了, 所以这里把传入[U] 整体进条件

	type S3<U, C = U> = [U] extends [never]
		? []
		: U extends C
		? [U, ...S3<Exclude<C, U>>]
		: never;
	// 这里同样, 用 [U]/[C]判断无关紧要, 因为这两个相等, U extends any也可以改成 U extends C, 但注意, 这里的意义跟前面完全不同, U 已经是map后的子元素了, 不可以反过来
	type P3 = S3<Uni>;

	type Permutation<T> = S3<T>;
	type perm = Permutation<Uni>;
}

//
// const t = ['a','b','c'];
// const result:string[][] = [];
// function permute(arr: string[], m:string[]=[]) {
//     if (arr.length === 0) {
//         result.push(m)
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             let first = arr[i];
//             let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
//             permute(rest, [...m, first])
//          }
//     }
// }
// permute(t)
// console.log(result)
