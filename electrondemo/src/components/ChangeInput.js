import React, { Component, Fragment } from 'react'
import {Input} from 'antd'
import PropTypes from 'prop-types'
import RightClickMenu from './RightClickMenu';
import styled from 'styled-components'

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
  render() {
    const { mode, renameValue, spanValue } = this.state
    const { key } = this.props
    return (
      <Fragment>
      <RightClickMenu
        key={key}
      >
        {mode?<span 
        onDoubleClick={this.onDoubleClickSpan}>
          {spanValue}
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
