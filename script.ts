/* Write your code below */

function assertArrayIndex(array: readonly unknown[], key: string) { }

type Index<Array> = any


/* Write your code above */



/* There should be no error in the test cases below */
const matrix = [
  [3, 4],
  [5, 6],
  [7, 8],
]

assertArrayIndex(matrix, 'rows')

let sum = 0

for (let i = 0 as Index<typeof matrix>; i < matrix.length; i += 1) {
  const columns: number[] = matrix[i]

  const x: number[] = matrix[0]

  assertArrayIndex(columns, 'columns')

  for (let j = 0 as Index<typeof columns>; j < columns.length; j += 1) {
    sum += columns[j]

    const y: number = columns[i]

    const z: number = columns[0]

    const u: number[] = matrix[j]
  }
}

const a: string[] = []

assertArrayIndex(a, 'a')

for (let p = 0 as Index<typeof a>; p < a.length; p += 1) {
  const value: string = a[p]

  const z: string = a[2]
}

a.push('qux')
// @ts-expect-error: number is not assignable to string
a.push(3)

for (const value of a) {
  const other: string = value
}

const b: number[] = []

assertArrayIndex(b, 'b')

for (let p = 0 as Index<typeof a>; p < b.length; p += 1) {
  // @ts-expect-error: number | undefined is not assignable to string
  const value: string = b[p]
}

const c: string[] = []

assertArrayIndex(c, 'c')

for (let p = 0; p < c.length; p += 1) {
  let value: string = c[p]

  value = c[0 as Index<typeof a>]
}

const d: readonly number[] = []

assertArrayIndex(d, 'd')

for (let p = 0 as Index<typeof d>; p < d.length; p += 1) {
  const value: number = d[p]

  // @ts-expect-error: only permits reading
  d[2] = 3
}

// @ts-expect-error: push does not exist on readonly
d.push(3)

const e: [number] = [0]

// @ts-expect-error: [number] is not assignable to never
assertArrayIndex(e, 'e')

const f: readonly [boolean] = [false]

// @ts-expect-error: [boolean] is not assignable to never
assertArrayIndex(f, 'f')

const tuple = [5, 7] as const

// @ts-expect-error: readonly [5, 7] is not assignable to never
assertArrayIndex(tuple, 'tuple')
