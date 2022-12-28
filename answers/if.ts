/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #easy #utils

  ### Question

  Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.

  For example:

  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```

  > View on GitHub: https://tsch.js.org/268
*/


/* _____________ Your Code Here _____________ */

type If<C extends boolean, T, F> = C extends true? T : F

// C ? T : F は誤り
// Cは型変数であるため実際にCに渡るのはtrue型かfalse型のどちらかであってbooleanな値ではない。
// よって単純に三項間演算子で条件分岐させることはできないのでextends trueで別途判定してやる必要がある。


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
    Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/268/answer
  > View solutions: https://tsch.js.org/268/solutions
  > More Challenges: https://tsch.js.org
*/

