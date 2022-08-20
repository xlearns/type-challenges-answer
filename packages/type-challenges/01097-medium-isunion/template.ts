type IsUnion<T, Copy = T> = [T] extends [never] 
? false
:  T extends Copy
     ?  [Copy] extends [T] 
         ? false 
         : true
     : never

namespace ts01097{
    type IsUnion<A,B = A> = 
        A extends A 
        ? [B] extends [A] 
                ? false
                : true
        : never
   /**
    * @description 分析：
    *   1.T extends Copy为第一个条件进行分布。
        2.使用元组避免类型分布作为第二个条件。
        type IsUnion<string|number> =
            string extends string|number ? [string|number] extends [string]?false : true : never
            | number extends string|number ? [string|number] extends [number]?false : true : never
        type IsUnion<string> =
            string extends string? [string] extends [string]?false : true : never
    */
   type t<T> = T extends T ? true :false
   type tt<T,U = T> = [U] extends [T] ? true :false
   type test =  t<never> //never
   type test2 =  t<undefined | null | void | ''> //true
   type test3 =  t<string | never> //true
   type test6 = t<never|string>//true
   type test4 = t<string | unknown>//true
   type test5 = t<unknown>//true
   type test7 = tt<undefined | null | void | ''>
}