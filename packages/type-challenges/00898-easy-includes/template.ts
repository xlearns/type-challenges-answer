type Includes<T extends any[], D> = T extends [infer A, ...infer B]
	? A extends D
		? true
		: Includes<B, D>
	: false;

//[infer A, ... infer B]中infer A获取的是第一个元素的类型，而...infer B获取的是数组其他剩余元素的数组类型;
// 可以通过infer 来取到数组第一个元素
