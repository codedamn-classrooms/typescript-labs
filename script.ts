/* Write your code below */

type GetOptional<T> = any


/* Write your code above */



/* There should be no error in the test cases below */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
]
