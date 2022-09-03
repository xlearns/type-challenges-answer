type Reverse<T> = T extends [infer A, ...infer B] ? [...Reverse<B>, A] : [];
