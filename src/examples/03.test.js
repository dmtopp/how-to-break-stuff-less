import React from 'react'
import Example from './03'
import { shallow } from 'enzyme'

describe('(Component) Example 03', () => {
  it('should fetch a quote', () => {
    const fetchQuote = jest.fn(() => ({ data: 'fake quote!'}))

    shallow(<Example fetchQuote={fetchQuote} />)

    expect(fetchQuote).toHaveBeenCalled()
  })
})
