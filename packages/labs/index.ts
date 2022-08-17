namespace 实验室 {
	type TransformTuPle<T> = {
		[K in keyof T]: true;
	};

	type A = TransformTuPle<["Kars", "Esidisi", "Wamuu", "Santana"]>;

	type C = Pick<{ name: string; age: number; sex: string }, "name">;

	type Methods<T, U extends string> = {
		[K in keyof T as K extends U ? never : K]: T[K];
	};

	type T60 = Methods<{ foo(): number; bar: boolean }, "bar">; // { foo(): number }

	type T61 = Omit<{ foo(): number; bar: boolean }, "bar">; // { foo(): number }

	type T62 = Exclude<"a" | "b" | "c", "a">;

	type AA = {
		name: string;
	};
	type BB = {
		age: number;
	};

	// type DD = Map<A> | Map<B>
	type DD = Map<AA, BB>;

	type Equal<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;

	type T0 = Equal<string, number>; //false
	type T1 = Equal<string | number, number>; // false
	type T2 = Equal<never, never>;
	type T3 = Equal<{ name: string }, { name: string; age: number }>; // false
	type T4 = Equal<{ name: string }, { name?: string }>; // false
}
