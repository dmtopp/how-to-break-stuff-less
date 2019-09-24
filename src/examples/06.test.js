import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Example from './06'

describe('(Component) Example 06', () => {
  it('should match a snapshot', () => {
    const component = shallow(<Example />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
