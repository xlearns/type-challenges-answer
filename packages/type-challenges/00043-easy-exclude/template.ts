//  U extends T
//  T extends U 区别

type MyExclude<T, U> = T extends U ? never : T;

/*
extends:
  - 基本使用
    - 在 ts 里，extends除了可以像 js 继承值，还可以继承/扩展类型：
     ```ts 
     interface Animal {
        kind: string;
      }
      
     interface Dog extends Animal {
        bark(): void;
      }
    ```
  - 泛型约束
    
  - 条件类型与高阶类型
 */
