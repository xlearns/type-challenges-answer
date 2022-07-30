// type MyOmit<A,B extends string | number > = Omit<A,B>

type MyOmit<A,B> = {[O in keyof A as O extends B?never:O]: A[O]}   

/*
ts中as的方法总结：
1. as操作符可以将一个类型转换为另一个类型，但是不能将一个类型转换为更多的类型。
2. as操作符可以用来替换类型断言，但是不能用来替换类型转换。

TypeScript 中的类型断言 as?
   要理解好类型断言，其实就深刻理解一句话：你会比TypeScript更了解某个值的详细信息 。
   类型断言，断言 断言，顾名思义，我断定怎么怎么样，代入这句话里就是，我断定这个类型是什么。
   当然这是我们主观上的思维逻辑，程序并不认可，所以我们需要告诉程序：“相信我，我知道自己在干什么” 。
 */