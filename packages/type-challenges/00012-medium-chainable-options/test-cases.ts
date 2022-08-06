import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const test = a.option('t',1).option('t1',1).get()
const t = typeof test;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()



const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]


// 分析
/*
 var t = {
    foo:123,
    bar:{ value: 'Hello World' },
    name: 'type-challenges'
  }

 type a = typeof t

 既将其转换为object
*/
type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}
