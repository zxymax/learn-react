import React, { Fragment } from 'react';
import YoungerSister from './YoungerSister';

const Component = React.Component;
class App extends Component {
  render() {
    return (
      <Fragment>
        <h2>Hi, Jorna</h2>
        <p>
          { false ? 'Jorna is true' : 'something no here.' }
        </p>
        <hr/>
        <YoungerSister />
      </Fragment>
    )
  }
}

export default App;
