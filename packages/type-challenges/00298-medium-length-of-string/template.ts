// [...S,A] : 将之前得S与解析完成得拼接成一个数组
type LengthOfString<T extends string,S extends any[] = []> = T extends `${infer A}${infer B}`?LengthOfString<B,[...S,A]>:S['length'];



// type StringToArray<T extends string> = T extends `${infer A}${infer B}`?[A,...StringToArray<B>]:[];

// type LengthOfString<T extends string> = StringToArray<T>['length']