/**
 * @description: typescript object merge
 */

type AppendToObject<T, U extends keyof any, Z> = {
	[K in keyof T | U]: K extends keyof T ? T[K] : Z;
};
