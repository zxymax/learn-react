import React, { Component } from 'react';
import YoungerSisterItem from './YoungerSIsterItem';

class YoungerSister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['精油推背', '基础按摩']
    }
    this.deleteItem = this.deleteItem.bind(this)
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  deleteItem(id) {
    const list = this.state.list
    console.log(id)
    list.splice(id, 1)
    this.setState({
      list
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
            this.state.list.map((item, index) => {
              return (
                <YoungerSisterItem
                  key={index+item}
                  content={item}
                  index={index}
                  deleteItem={()=>this.deleteItem(index)}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default YoungerSister;
