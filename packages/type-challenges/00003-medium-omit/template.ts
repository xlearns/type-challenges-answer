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

TypeScript as 的用途：
1. 类型断言：
    当你不确定一个联合类型的变量到底是哪个类型的时候，使用类型断言，能够告诉 TypeScript 我知道这个变量的确切类型。
    比如：
        let a: any = 'hello'
        let b: string = a as string
        console.log(b)
    上面代码中，a 是一个 any 类型，但是我知道它的确切类型是 string，所以我可以把它断言成 string 类型。
    如果 a 是一个 string 类型，我可以把它断言成 string 类型，但是我不能把它断言成 number 类型。
 2. 
  */