type Foo<T> = T[keyof T];

namespace 获取对象所有的值的联合类型 {
	type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;

	type t = Foo<{ a: string; b: number }>; // string | number
}
