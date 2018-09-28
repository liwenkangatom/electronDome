import React, { Component } from 'react'
// import ChangeInput from './ChangeInput';
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu'
import SeachTreeNode from './SearchTreeNode'
import TagTree from '../utils/TagTree'
import uuid from '../utils/UUID'
const list = [
        {key: 0, title: 'test1', pid: null},
        {key: 1, title: 'test2', pid: null},
        {key: 2, title: 'test3', pid: 0},
        {key: 3, title: 'test4', pid: 1}, 
        {key: 4, title: 'test5', pid: 0},
        {key: 5, title: 'test6', pid: 4}

      ]
class Son extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      {console.log(this.props)}
     <button onClick={this.props.test}>Test</button>
      <ContextMenuTrigger id={this.props.you}>
        out
      </ContextMenuTrigger>
        <ContextMenu id={this.props.you}>
          <MenuItem >
          <div onClick={this.props.test}>
            hello
          </div>
          </MenuItem>
        </ContextMenu>
      </div>
    )
  }
}

class Father extends Component {
  constructor(props) {
    super(props)
    this.state={
      value: 'null'
    }
  }
  // hokers
  // func
  changeHandle =() => {
    alert('hello')
    this.setState({
      value: 'hello'
    })
  }
  render() {
    return (
      <div>
        {this.state.value}
        <Son you={'1'} test={this.changeHandle} >
          hello
        </Son>
        <Son test={this.changeHandle} you={'2'}>
         you 
        </Son>

      </div>
    )
  }
  
}

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.tree = new TagTree(list)
   
    this.state= {
      value: 'hih'
    }
  }
  changeValue = () => {
    this.setState({
      value: 'Hello This is bad'
    })
  }
  render() {  

        
      
    const { value } = this.state
    return (
      <div>
        {console.log(uuid())}
        {console.log('after', this.tree.getList())}
      </div>
    )
  }
}