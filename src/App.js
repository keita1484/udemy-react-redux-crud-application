import React from 'react';


const App = () => (<Counter></Counter>)

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 }) 
  }

  handleMinusButton = () => {
    const state = this.state.count;
    if(state ===  0) return;
    this.setState({ count: state - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;