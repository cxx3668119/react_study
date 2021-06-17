import React, { Component } from 'react'

class Btn extends React.Component {
  render() {
    const { increment } = this.props
    return (
      <button onClick={increment}>+</button>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>
          当前计数：{this.state.counter}
        </h2>
        <button onClick={e => this.increment()}>+</button>
        <Btn increment={e => this.increment()} />
      </div>
    )
  }

  increment() {
    // console.log(1);
    this.setState({ counter: this.state.counter + 1 })
  }
}
