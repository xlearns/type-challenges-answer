type MyReadonly2<T,K extends keyof T = keyof T> =  {
    readonly [P in K]: T[P]
} & {
    [P in Exclude<keyof T, K>]: T[P]
}

// type MyReadonly2<T,K> = Exclude<keyof T, K>

/*
解题：
这题需要结合上一题，需要判断当前的 key 是不是 K 中传入的，如果是 K 中的，那么需要设置为 readonly，要主要其他的也要保持原来的类型。需要注意，当 K 不传入时，所有都需要是 readonly ，因此可以设置 K 为 T

ts泛型如何设置默认值?
type MyReadonly2<T,K = 1> = K

ts中&操作符的用法【对象】
type MyReadonly2<T,K = 1> = K & T

ts的Exclude

 */