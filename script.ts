/* Write your code below */

type PublicType<T extends object> = any


/* Write your code above */



/* There should be no error in the test cases below */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string; _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number; i: unknown }>, { i: unknown }>>,
]
