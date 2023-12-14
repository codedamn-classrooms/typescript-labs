/* Write your code below */

type FlipArguments<T> = any


/* Write your code above */



/* There should be no error in the test cases below */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
  FlipArguments<'string'>,
  FlipArguments<{ key: 'value' }>,
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  FlipArguments<null | undefined>,
]
