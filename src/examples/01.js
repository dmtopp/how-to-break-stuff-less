import React from 'react';

class Example extends React.Component {
  state = {
    text: 'Greetings!'
  }

  updateText = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.state.text}</div>
        <input onChange={this.updateText} />
      </React.Fragment>
    )
  }
}

export default Example
