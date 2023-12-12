/* Write your code below */

type HelloWorld = any // expected to be a string


/* Write your code above */



/* There should be no error in the test cases below */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
