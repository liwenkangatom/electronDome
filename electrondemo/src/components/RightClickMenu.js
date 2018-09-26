import React, { Component, Fragment } from 'react'
import {ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import styled from 'styled-components'

const Menu = styled.div`
  width: 118px;
	height: 88px;
  background-color:#ffffff;

	box-shadow: 0px 2px 10px 0px rgba(124, 124, 124, 0.29);
  border-radius: 4px`
const MenuButton = styled.div`
  width:118px;
  height: 27px;
  line-height:27px;
  font-family: ArialMT;
  font-size: 14px;
  color: #7c7c7c;
  &:hover {
    background-color: rgba(124, 124,124, 0.1);
  }

`

export default class RightClickMenu extends Component {
  render() {
    const { key } = this.props
    const { addhandle, showDeleteConfirm, changehandle} = this.props
    return (
    <div>
      <Fragment>
        <ContextMenuTrigger id='TagMenuTrigger'>
          {this.props.children}
        </ContextMenuTrigger>
        <ContextMenu id='TagMenuTrigger'>
          <Menu>
            <MenuButton>
              <MenuItem onClick={addhandle(key)} >
              Add Tag After</MenuItem>
            </MenuButton>
            <MenuButton>
              <MenuItem onClick={showDeleteConfirm(key)}>
              Delete</MenuItem>
            </MenuButton>
            <MenuButton>
              <MenuItem onClick={changehandle(key)}>
              Rename</MenuItem>
            </MenuButton>
          </Menu>
        </ContextMenu>
      </Fragment>  
    </div>
    )
  }
}
