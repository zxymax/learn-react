import React, { Component } from 'react';

class YoungerSisterItem extends Component {
  handleClick() {
    // console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
    )
  }
}

export default YoungerSisterItem;
