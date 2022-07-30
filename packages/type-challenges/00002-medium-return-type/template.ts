type MyReturnType<Fn> = Fn extends (...args)=>infer T ? T : any

/*
 ts如何获取函数的返回类型？

    直接用 typeof fn 获取
 
    infer作用？
   
    在类型推断的时候，可以用infer来替代类型变量

    infer T 是一个占位符，表示返回类型  
*/