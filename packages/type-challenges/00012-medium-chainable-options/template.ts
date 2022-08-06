
// type Chainable<T = {}> = {
//     option: <K extends string, V>(key: K extends keyof T ? 
//         V extends T[K] ? never : K 
//         : K, 
//         value: V) => Chainable<Omit<T, K> & Record<K, V>>,
//     get: () => T;
// };

type Chainable<T = {}> = {
    option: <K extends string, V>(key:K extends keyof T ? 
                V extends T[K] ? never : K 
                : K,value:V)=> Chainable<Omit<T,K> & Record<K,V>>,
    get:()=>T
}

// ts Omit 作用：排除掉指定的key
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/*
type Person = {
    name: string;
    age: string;
    location: string;
};

type PersonWithoutLocation = Omit<Person, 'location'>;

// PersonWithoutLocation equal to QuantumPerson
type QuantumPerson = {
    name: string;
    age: string;
};
*/


// ts Pick 作用：拣选属性，将 Type 的部分类型 Keys 挑出来，返回这部分类型。
// type Pick<T, K extends keyof T> = { [P in K]: T[P] };
/*
type Person = {
    name: string;
    age: string;
    location: string;
};

type PersonWithoutLocation = Pick<Person, Exclude<'name' | 'age' | 'location', 'location'>>;
*/



// ts Record 作用：指定的key和value
// type Record<K extends keyof any, T> = { [P in K]: T };
/*
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
*/

// ts Exclude 作用：排除掉指定的key
// type Exclude<T, U> = T extends U ? never : T;

// ts keyof any 作用：指定的key
// type keyof any = { [key: string]: any } extends { [key: string]: infer T } ? T : never;

