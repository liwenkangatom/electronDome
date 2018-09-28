import React, { Component, Fragment } from 'react'
import {Input} from 'antd'
import PropTypes from 'prop-types'
import RightClickMenu from './RightClickMenu';
import styled from 'styled-components'
import RightMenu from './RightMenu';
class Son extends Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    return (
      <div>
        <button onClick={this.props.onChange}>ENTER</button>
      </div>
    )
  }
}

const InputWrap = styled.div`
  width:60px;
`
export default class ChangeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: true,
      spanValue: '',
      renameValue: ''
    }
  }
  componentWillMount() {
    this.setState({
      spanValue: this.props.display
    })
  }
  onDoubleClickSpan = () => {
    this.setState({
      mode: false,
      renameValue: this.state.spanValue
    })
  }
  onBlurInput = () => {
    this.setState({
      mode: true
    })
  }
  onFocusInput =() => {
    console.log(this.refs)
  }
  onPressEnterInput = (e) => {
    // if(e.keyCode === 13){
      this.setState({
        spanValue: e.target.value,
        mode: true
      })    //do somethings
    // }
  }
  onChangeInput = (e) => {
    this.setState({
      renameValue: e.target.value
    })  
  }
  // todo: 把子组件的方法写上
  onAddNode = () => {
    let key = this.props.itemKey
    // key = parseInt(key)
    this.props.addKey(key)
  }

  render() {
    const { mode, renameValue, spanValue } = this.state
    const { addKey, searchValue } = this.props
    const index = spanValue.indexOf(searchValue)
    const beforeStr = spanValue.substr(0, index)
    const afterStr = spanValue.substr(index + searchValue.length)
    return (
      <Fragment>
      
      <RightClickMenu itemKey={this.props.itemKey}>
        {mode?<span 
        onDoubleClick={this.onDoubleClickSpan}>
          {beforeStr}
          <span style={{color: '#f50'}}>{searchValue}</span>
          {afterStr}
        </span>:
        <InputWrap>
          <Input 
          size='small'
        ref='test'
        autoFocus
        value={renameValue}
        onChange={this.onChangeInput}
        onPressEnter={this.onPressEnterInput}
        onFocus={this.onFocusInput}
        onBlur = {this.onBlurInput}
        >
        </Input>
        </InputWrap>
        }
      </RightClickMenu>
      <RightMenu
      itemKey={this.props.itemKey}
      addHandle={this.onAddNode}
      // deleteHandle={}
      renameHandle={this.onDoubleClickSpan}
      ></RightMenu>
        
      </Fragment>
    )
  }
}
ChangeInput.propTypes = {
  display: PropTypes.string
}
ChangeInput.defaultProps = {
  display: 'null'
}
