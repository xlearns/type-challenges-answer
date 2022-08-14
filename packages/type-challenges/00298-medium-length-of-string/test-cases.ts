import type { Equal, Expect } from '@type-challenges/utils'

type test = LengthOfString<'kumiko'>

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]


namespace t00298 {
    type Uni = 'kumiko'
    //因为str是一个字符串，在ts中string是没有length得属性的，所以这里吧string转换成array然后因为array有length属性，所以可以使用length属性
    // STEP1: 封装stringtoarray函数
    // 利用递归，将string转换成array
    type StringToArray<T extends string> = T extends `${infer A}${infer B}`?[A,...StringToArray<B>]:[];
    // 直接获取string转换成得array数组得length属性
    type LengthOfString<T extends string> = StringToArray<T>['length']

    type test = LengthOfString<'kumiko'>
    
    //总结：在 TS 中主要担任 计数器 的角色。用到的主要是数组的 length 属性
}