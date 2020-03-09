import React from 'react';
const Component = React.Component;

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hi, Jorna</h2>
        <p>
          { false ? 'Jorna is true' : 'something no here.' }
        </p>
      </div>
    )
  }
}

export default App;
