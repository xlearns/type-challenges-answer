type GetSuffix<T> = T extends `${infer Num}%` ? [Num, '%'] : [ T, '']
type PercentageParser<A extends string> = 
  A extends `${infer L}${infer R}` 
    ? L extends '+' | '-' ? [L, ...GetSuffix<R>] : ['', ...GetSuffix<A>]
    : ['', '','']
     