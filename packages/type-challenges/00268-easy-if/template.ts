type If<T extends Boolean, D, U> = T extends true ? D : U;
