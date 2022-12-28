/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in Exclude<T, U>

  > Exclude from T those types that are assignable to U

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/


/* _____________ Your Code Here _____________ */

type MyExclude<T,U> = T extends U ? never : T;

// ref: https://www.pandanoir.info/entry/2020/04/25/222913
// 例えばTが "a" | "b" | "c" でUが"a"の場合、
// "a" extends "a" ? never : "a" | "b" extends "a" ? never : "b" | "c" extends "a" ? never : "c"
// と分配されるので "b" | "c" が返ってくる
// これをunion distribution と言って、条件型に対してunionを使った場合にのみ発生する

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/

