import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "hello world",
    }
  }


  render() {
    return (
      <div>
        <h2>当前计数：{this.state.message}</h2>
        <button onClick={e => this.changeTxt()}> 改变文本</button>
      </div>
    )
  }

  changeTxt() {
    this.setState({
      message: "你好啊"
    })
    console.log(this.state.message);
  }
}
