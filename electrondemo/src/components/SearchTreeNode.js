import React, { Component, Fragment } from 'react'
import {Input} from 'antd';
const Search = Input.Search 
export default class SearchTreeNode extends Component {
  render() {
    return (
      <Fragment>
        <Search></Search>
      </Fragment>
    )
  }
}
