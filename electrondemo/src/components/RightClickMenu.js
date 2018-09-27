import React, { Component, Fragment } from 'react'
import {ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'

export default class RightClickMenu extends Component {
   constructor(props) {
      super(props);
    }
   render() {
    return (
      <Fragment>
      <ContextMenuTrigger id={this.props.itemKey || 'default'} >
        {this.props.children}
      </ContextMenuTrigger> 
      </Fragment>  
      )
  }
}
