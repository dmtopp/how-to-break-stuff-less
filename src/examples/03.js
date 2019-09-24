import React from 'react';

class Example extends React.Component {
  state = {
    quote: 'Not fetched :('
  }

  async componentDidMount() {
    const res = await this.props.fetchQuote()
    this.setState({ quote: res.data })
  }

  render() {
    return (
      <div>{this.state.quote}</div>
    )
  }
}

export default Example
