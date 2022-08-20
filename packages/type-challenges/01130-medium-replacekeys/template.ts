type ReplaceKeys<U, T, Y,K = U> = U extends K? {
    [P in keyof U ]:P extends T? P extends keyof Y?Y[P]:never:U[P]
}: never

