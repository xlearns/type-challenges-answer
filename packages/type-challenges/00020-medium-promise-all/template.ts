declare function PromiseAll<T extends unknown[]>(value:readonly [...T]):Promise<{
   [k in keyof T]: T[k] extends Promise<infer U> ? U : T[k]
}>