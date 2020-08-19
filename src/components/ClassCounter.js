import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillUnmount() {
    console.log('unmounting code');
  }

  incrementCount = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <React.Fragment>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.incrementCount}>Click Me</button>
      </React.Fragment>
    );
  }
}

export default ClassCounter;
