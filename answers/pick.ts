/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in

  ### Question

  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/4
*/


/* _____________ Your Code Here _____________ */

type MyPick<T, K extends keyof T> ={
    [P in K]: T[P]
}

//memo
//keyof はオブジェクトのキーを文字列のユニオン型として取得する
//例: type T = keyof {a: string, b: number} // "a" | "b"

//extendsは、extends元の型そのものかそのサブタイプのみを受け入れる
//サブタイプは元の型に代入可能な型のこと。例えば、numberはnumber | stringのサブタイプ。
//例: type T = "a" extends "a" | "b" // true

//P in K はKの要素をPに代入していく。for文のようなもの
//なおinはfor文のように使えるし、プロパティの存在判定にも使える
//例: "a" in {a: string, b: number} // true

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
}

interface Expected2 {
    title: string
    completed: boolean
}



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4/answer
  > View solutions: https://tsch.js.org/4/solutions
  > More Challenges: https://tsch.js.org
*/

