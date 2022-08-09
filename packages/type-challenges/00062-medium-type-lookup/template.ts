type LookUp<T, K> = T extends { type: K } ? T : never;
