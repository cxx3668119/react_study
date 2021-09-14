import React, { Component, Fragment } from "react";
import "./style.css";
import TodoItem from "./TodoItem";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
  }

  render() {
    return (
      <Fragment>
        {/*
         */}
        <div>
          <label htmlFor="cxx">陈新昕</label>
          <input
            id="cxx"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          ></input>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                key={this.props.index}
                content={item}
                index={index}
                handleItem={this.handleItemClick.bind(this)}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState(() => {
      return {
        inputValue: e.target.value,
      };
    });
  }
  handleBtnClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }
  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}

export default ToDoList;
