import React, { Component } from 'react'
import styled from 'styled-components'
import { ContextMenu, MenuItem } from 'react-contextmenu'
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
    cursor: pointer;
  }
`
export default class RightMenu extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { key, addHandle, deleteHandle, renameHandle } = this.props
    return (
      <div>
      {console.log(this.props)}
           <ContextMenu id={this.props.itemKey||'default'} >
          <Menu>
            <MenuButton >
              <MenuItem onClick={addHandle}>
              Add Tag After</MenuItem>
            </MenuButton>
            <MenuButton >
              <MenuItem onClick={deleteHandle}>
              Delete</MenuItem>
            </MenuButton>
              <MenuButton >
              <MenuItem onClick = {renameHandle}>
              Rename</MenuItem>
            </MenuButton>
          </Menu>
        </ContextMenu>
      </div>
    )
  }
}
