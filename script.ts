/* Write your code below */

type SnakeCase<T> = any


/* Write your code above */



/* There should be no error in the test cases below */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
  Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
  Expect<Equal<SnakeCase<'getElementById' | 'getElementByClassNames'>, 'get_element_by_id' | 'get_element_by_class_names'>>,
]
