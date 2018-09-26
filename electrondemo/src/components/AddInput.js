import React, {
  Component,
  Fragment
} from 'react'
import {
  Input
} from 'antd'
import PropTypes from 'prop-types'

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

  onBlurInput = () => {
    this.setState({
      mode: true
    })
  }

  onPressEnterInput = (e) => {
    // if(e.keyCode === 13){
    this.setState({
      spanValue: e.target.value,
      mode: true
    }) //do somethings
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
    <Fragment > {
        mode ? < span
        onDoubleClick = {
          this.onDoubleClickSpan
        } > {spanValue} </span>: 
        <Input
        ref = 'test'
        autoFocus
        value = {
          renameValue
        }
        onChange = {
          this.onChangeInput
        }
        onPressEnter = {
          this.onPressEnterInput
        }
        onFocus = {
          this.onFocusInput
        }
        onBlur = {
          this.onBlurInput
        } >
        </Input>} 
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
