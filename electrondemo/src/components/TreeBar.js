import React, { Component, Fragment } from 'react'
import {Tree} from 'antd'
const TreeNode = Tree.TreeNode
export default class TreeBar extends Component {
  render() {
    return (
      <Fragment>
        <TreeNode title='TestNOe'></TreeNode>
      </Fragment>
    )
  }
}
