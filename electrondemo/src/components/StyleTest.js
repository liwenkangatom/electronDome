import React, { Component } from 'react'
import styled from 'styled-components'
// import {Input} from 'antd'

import ChangeInput from './ChangeInput';

const Son = styled.div ` width: 5rem;
  height: 6rem;
  margin: 1rem auto;
  color: #032ffc;
  background-color: #7af584;
  border-radius: 0.2rem;
  border: solid #ffffff;
  span {
    display: block;
    color: black; 
    border: solid #cef33a;
  }
  span:hover{
    color: #ff8080
  }
  ${'' /* .father &{
    background: #97e891
  } */}
  ${'' /* & {
    background: #800080
  } */}
  &.some{
    background: #4b99a7
  }
  .cont &{
    background: #696f02
  }`
 

export default class StyledTest extends Component {
  render() {
    return (
      <div className="father">
        <Son><span>大儿子</span></Son>
        <div className="cont">
          <Son> 侄子 </Son>
        </div>
        <Son className="some"><span>二儿子</span></Son>
        <Son ><span>三儿子</span></Son>
        
        <Son>四儿子</Son>
        <ChangeInput></ChangeInput>
      </div>
    )
  }
}
