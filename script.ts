/* Write your code below */

type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

type Token = any
type ParseResult<T, K extends Token[]> = [T, K]
type Tokenize<T extends string, S extends Token[] = []> = Token[]
type ParseLiteral<T extends Token[]> = ParseResult<any, T>

type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>


/* Write your code above */



/* There should be no error in the test cases below */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<(
    Parse<`
      {
        "a": "b", 
        "b": false, 
        "c": [true, false, "hello", {
          "a": "b", 
          "b": false
        }], 
        "nil": null
      }
    `>
  ), (
    {
      nil: null
      c: [true, false, 'hello', {
        a: 'b'
        b: false
      }]
      b: false
      a: 'b'
    }

  )>>,
  Expect<Equal<Parse<'{}'>, {}>>,

  Expect<Equal<Parse<'[]'>, []>>,

  Expect<Equal<Parse<'[1]'>, never>>,

  Expect<Equal<Parse<'true'>, true>>,

  Expect<Equal<
  Parse<'["Hello", true, false, null]'>,
  ['Hello', true, false, null]
  >>,

  Expect<Equal<
  (
    Parse<`
      {
        "hello\\r\\n\\b\\f": "world"
      }`>
  ), (
    {
      'hello\r\n\b\f': 'world'
    }
  )
  >>,

  Expect<Equal<Parse<'{ 1: "world" }'>, never>>,

  Expect<Equal<Parse<`{ "hello
  
  world": 123 }`>, never>>,
]
