import data from './data.json';

export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: string
}

const range = (len: number) => {
  const arr: any = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

export type PersonData = Person & {
  subRows?: PersonData[]
}

export function makeData(...lens: number[]): PersonData[] {
  return data
}
