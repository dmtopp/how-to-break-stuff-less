import axios from 'axios'

export const fetchQuote = () =>
  axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
