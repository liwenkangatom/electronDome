import React, { Component } from 'react'
import Resizable from 're-resizable';

export default class ResizeBox extends Component {
  render() {
    return (
      <div>
        <Resizable
          defaultSize={{
            width: 320,
            height: 200
          }}
        >
        {this.props.children}
        </Resizable>
      </div>
    )
  }
}
