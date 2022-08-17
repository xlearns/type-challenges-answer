import type { Equal, Expect } from "@type-challenges/utils";
/**
 * @description: 获取对象所有的值的联合类型
 */

type t = Foo<{ a: string; b: number }>; // string | number

