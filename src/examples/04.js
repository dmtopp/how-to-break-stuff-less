import React from 'react';

const SubComponent = ({ renderCheck }) => {
  renderCheck()

  return <p>How's it goin?</p>
}

const Component = ({ renderCheck }) => (
  <main>
    <h1>Greetings!</h1>
    <SubComponent renderCheck={renderCheck} />
  </main>
)

export default Component
