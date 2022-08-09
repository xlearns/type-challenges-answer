//去除左空格
// string -> array
// 去除数组的第一项比较，递归
// your answers
type Space = ' ' | '\n' | '\t' 

type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S
