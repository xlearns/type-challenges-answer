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
*/
