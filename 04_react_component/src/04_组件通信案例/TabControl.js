import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class TabControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }

  render() {
    let { titles } = this.props
    let { currentIndex } = this.state
    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div key={index}
                className={" tab-item " + (index === currentIndex ? "active" : "")}
                onClick={e => this.itemClick(index)}>
                <span className={index === currentIndex ? "tab-span" : ""}>{item}</span>
              </div>

            )
          })
        }
      </div>
    )
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })

    const { itemClick } = this.props;
    itemClick(index)
  }
}

// TabControl.propTypes = {
//   titles: PropTypes.arrayOf(PropTypes.array)
// }