import React from 'react';
import Header from './Header';

// to use state or life-cycle methods you need to define a class
// as opposed to the state-less function used in the last lesson.
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {test: 'this is a string'}
  // }

  // Note: in the console you can access the state object with $r 
  // or, directly with $r.state
  state = {
    pageHeader: 'Naming Contests'
  };

  render () {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    );
  }
}

export default App;