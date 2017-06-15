import React from 'react';
import Header from './Header';

// to use state or life-cycle methods you need to define a class
// as opposed to the state-less function used in the last lesson.
class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
    // console.log('did mount.');
    // debugger;

    // This is where you might put AJAX fetching...
    // timers...  listeners...
  }
  componentWillUnmount () {
    // console.log('will unmount.');
    // debugger;

    // Cleans timers...  l...
  }

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