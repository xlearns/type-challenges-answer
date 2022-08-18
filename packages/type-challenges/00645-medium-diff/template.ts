// ts type对象转数组
type objToArray<T> = {
	[K in keyof T]: T[K];
};

// ts union type转数组
type unionToArray<T> = T extends any ? T[keyof T] : never;

type ToArrayLength<T extends any[]> = T extends (infer S)[] ? S : never;

type testA = objToArray<{ name: number; age: string }>;

// type testB = ToArrayLength<testA>;

type Diff<O, O1> = {
	[K in
		| Exclude<keyof O1, keyof O>
		| Exclude<keyof O, keyof O1>]: K extends keyof O
		? O[K]
		: K extends keyof O1
		? O1[K]
		: never;
};
