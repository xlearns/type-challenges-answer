const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

/*  ts中的typeof
      typeof与对象结合使用，可以获取对象的属性和方法
      typeof与函数结合使用，可以获取函数的参数和返回值
      typeof与类结合使用，可以获取类的属性和方法
      typeof与枚举结合使用，可以获取枚举的属性和方法
      typeof与类型别名结合使用，可以获取类型别名的属性和方法
      typeof与接口结合使用，可以获取接口的属性和方法
      typeof与泛型结合使用，可以获取泛型的属性和方法
      typeof与类型别名结合使用，可以获取类型别名的属性和方法
      https://www.typescriptlang.org/play?#code/MYewdgzgLgBAsgTwIICcUEMEwLwwNoBQMMA3jGOgLYCmAXDAERIA2AlsNQwDQzoDmdGAEYArDAC+XIqXJVBDAEIgARt14D6AJgDMEqcTIUa9BgFEAbpx79B2gBx6CAXQDcBAqEix0OYjKPyLOxW6oKiEu5QCAAO1DBQsLhRsSAAZrxuBMlxUNTQvtlp8MhomHhgAK6UytQoru5ZMXEACrUQ4AVNRYioGAjlVTV1bgD0I34AegD8jbEwSAKdKek9pf2V1bVOeAw2DPVjkzOHAPIos3EL1Jq+rSjtYDt7B+PE00A
      */
