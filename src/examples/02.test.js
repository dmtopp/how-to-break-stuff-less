import { capitalize } from './02'

describe('(Function) Example 02', () => {
  it('should capitalize words', () => {
    expect(capitalize('hello there')).toEqual(['HELLO', 'THERE'])
  })
})
