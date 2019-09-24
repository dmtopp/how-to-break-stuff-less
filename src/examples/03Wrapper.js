import React from 'react'
import Example from './03'
import { fetchQuote } from '../http'

export const Wrapped = () => <Example fetchQuote={fetchQuote} />
