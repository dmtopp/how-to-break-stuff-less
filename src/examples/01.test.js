import React from 'react'
import Example from './01'
import { shallow } from 'enzyme'

describe('(Component) Example 01', () => {
  it('should update state', () => {
    const instance = shallow(<Example />).instance()

    instance.setState({ text: 'Greetings!' })

    expect(instance.state).toEqual({
      text: 'Greetings!'
    })
  })
})
