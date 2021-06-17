import React, { Component } from 'react'
import TabControl from './TabControl'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTitle: '流行',
      titles: ['流行', '新款', '精选']
    }
  }

  render() {
    const { currentTitle, titles } = this.state

    return (
      <div>
        <TabControl itemClick={index => this.itemClick(index)} titles={titles} />
        <h2 className="tag-container">{currentTitle}</h2>
      </div>
    )
  }
  itemClick(index) {
    this.setState({
      currentTitle: this.state.titles[index]
    })
  }
}
