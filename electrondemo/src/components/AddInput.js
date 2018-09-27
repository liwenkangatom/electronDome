import React, {
  Component,
  Fragment
} from 'react'
import {
  Input
} from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AddInputWrap = styled.div`
  width:60px
`

export default class AddInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: false,
      spanValue: '',
      addValue: ''
    }
  }
  componentWillMount() {
    this.setState({
      spanValue: this.props.display
    })
  }


  onCancel = () => {
    const ParentKey = this.props.ParentKey
  
    this.props.cancelAdd(ParentKey)
  }
  onPressEnterInput = (e) => {
    // if(e.keyCode === 13){
    this.setState({
      spanValue: e.target.value,
    },this.onCancel) //do somethings
    // }

  }
  onChangeInput = (e) => {
    this.setState({
      renameValue: e.target.value
    })
  }
  render() {
    const {
      mode,
      renameValue,
      spanValue
    } = this.state
    return ( 
    <Fragment > 
        {mode ? 
        <span
        onDoubleClick = {this.onDoubleClickSpan}>
          {spanValue} 
        </span>: 
        <AddInputWrap>
          <Input
          size='small'
          ref = 'test'
          autoFocus
          value = {renameValue}
          onChange = {this.onChangeInput}
          onPressEnter = {this.onPressEnterInput}
          onFocus = {this.onFocusInput}
          onBlur = {this.onCancel} >
          </Input>
        </AddInputWrap>
        }
    </Fragment>
      )
    }
  }
  AddInput.propTypes = {
    display: PropTypes.string
  }
  AddInput.defaultProps = {
    display: 'null'
  }
