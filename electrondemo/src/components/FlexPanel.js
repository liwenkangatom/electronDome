import React, { Component } from 'react'
import styled from 'styled-components'
import Resizeble from 're-resizable'
import { Button } from 'antd';

const FlexPanelCont = styled.div`
  width:${props=>props.width};
  height:500px;
  border-style: dotted;
  border-width: 1px;
  border-color: orange;

`
const FlexPanelEdge = styled.div`
  width: 1px;
  height:100%;
  float: right;
  border-style: solid;
  border-color: black;
`

export default class FlexPanel extends Component {
  constructor(props) {
    super(props)
    this.state={
      panelWidth: '200px',
      panelCllaspe: false
    }
  }

  // onDragPanelEdge=() =>{

  // }
  onEdgeDown=(e) => {
    console.log('onEdgeDown Evetn', e.clientX)
  }
  onEdgeMove = (e) => {
    console.log('onEdgeMove Event',e.clientX)
  }
  onEdgeUp = (e) => {
    console.log('onresizeStorp', e)
    this.setState({
      panelWidth: e.clientX
    })
  }
  collaspe = () => {
    this.setState({
      panelCllaspe: !this.state.panelCllaspe,
      panelWidth: '0px'
    })
  }
  render() {
    return (
      <FlexPanelCont width='100%'>
      
         <Resizeble onResizeStop={this.onEdgeUp}  maxWidth={600} size={{width: this.state.panelWidth,height:795}} enable={{top:false, left:false, topLeft:false, topRight: false, bottom:false, bottomLeft: false, bottomRight:false, right:true}} style={{
          borderColor:'#333',
          width: '300px',
          borderStyle: 'solid',
          float:'left' ,
          overflow: 'hidden'
        }}>Demo Resizeble</Resizeble>
        <div className='containner' style={{
          float:'left',
          width:'50px',
          height:'400px',
         
        }}><Button onClick={this.collaspe} style={{
        position:'relative',
        left:'0px'
      }}> 收起</Button>
          this is content
        </div>
      </FlexPanelCont>
       

    )
  }
}
