type First<T> = T extends [infer A, ...infer B] ? A : unknown;
