import React from 'react'
import Example from './04'
import { mount, shallow } from 'enzyme'

describe('(Component) Example 04', () => {
  const renderCheck = jest.fn()

  it('shallow renders', () => {
    shallow(<Example renderCheck={renderCheck} />)

    expect(renderCheck).not.toHaveBeenCalled()
  })

  it('renders the whole tree', () => {
    mount(<Example renderCheck={renderCheck} />)

    expect(renderCheck).toHaveBeenCalled()
  })
})
