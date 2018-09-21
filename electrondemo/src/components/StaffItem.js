import React, { Component } from 'react'

export default class StaffItem extends Component {
  render() {
    return (
      <div>
        <tr>
          <td className="itemTd">{this.props.item.info.name}</td>
          <td className="itemTd">{this.props.item.info.age}</td>
          <td className="itemTd">{this.props.item.info.id}</td>
          <td className="itemTd">{this.props.item.info.sex}</td>
          <td className="itemTd">
            <a href="#" className="itemBtn">Delete</a>
            <a href="#" className="itemBtn">Detail</a>
          </td>
        </tr>
      </div>
    )
  }
}
