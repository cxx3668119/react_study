import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super()

    console.log('执行了组件的constructor');

    this.state = {
      counter: 0,
    }
  }

  render() {
    console.log("执行了render函数");

    return (
      <div>
        我是App组件
        <h2>当前计数{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidMount() {
    console.log('执行了组件的componentDidMount');
  }

  componentDidUpdate() {
    console.log('执行了组件的componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('执行了组件的componentUnMount');
  }
}
