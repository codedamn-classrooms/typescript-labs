/* Write your code below */

type OptionalUndefined<T, Props> = any


/* Write your code above */



/* There should be no error in the test cases below */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OptionalUndefined<{ value: string | undefined }, 'value'>, { value?: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string; desc: string }, 'value'>, { value: string; desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined; desc: string }, 'value'>, { value?: string; desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined; desc: string | undefined }, 'value'>, { value?: string | undefined; desc: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined; desc: string }, 'value' | 'desc'>, { value?: string; desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined; desc: string | undefined }>, { value?: string; desc?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }, 'value'>, { value?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }>, { value?: string }>>,
]
