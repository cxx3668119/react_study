import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        {test}-{content}
      </div>
    );
  }
  handleClick() {
    const { handleItem, index } = this.props;
    handleItem(index);
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  handleItem: PropTypes.func,
  index: PropTypes.number,
};

TodoItem.defaultProps = {
  test: "hello world",
};

export default TodoItem;
