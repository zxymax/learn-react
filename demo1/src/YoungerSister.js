import React, { Component } from 'react';

class YoungerSister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['精油推背', '基础按摩']
    }
  }
  inputChange(e) {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  render() {
    return(
      <div>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => <li key={index+item}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default YoungerSister;
