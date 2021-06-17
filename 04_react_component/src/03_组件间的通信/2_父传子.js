import React, { Component } from 'react'

class ChildCpn extends Component {
  render() {
    let { name, age, height } = this.props
    return (
      <h2>子组件展示数据:{name + " " + age + " " + height}</h2>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="cxx" age="23" height="191" />
      </div>
    )
  }
}
