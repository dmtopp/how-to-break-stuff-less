import React from 'react'
import { shallow } from 'enzyme'
import Example from './05'

describe('(Component) Example 05', () => {
  it('should have a button', () => {
    const component = shallow(<Example />)

    expect(component.find('button').length).toBe(1)
  })
})
