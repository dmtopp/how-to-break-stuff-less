import React from 'react'
import Example from './04'

const renderCheck = () => {
  alert('SubComponent rendered!')
}

export const Wrapped = () => <Example renderCheck={renderCheck} />
