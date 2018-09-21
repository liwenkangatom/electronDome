import React, { Component } from 'react'
import StaffItem from './StaffItem'

export default class StaffItemPanel extends Component {
  render() {
    let items = []
    if(this.props.items.length === 0) {
      items.push(<tr key={items.length}><th colSpan='5'  className='tempEmpty'>None users</th></tr>)
    }else {
      this.props.items.forEach(item => {
        items.push(<StaffItem key={item.key} item = {item}></StaffItem>)
      });
    }
    return (
      <div>
        <table className="itemPanel">
          <thead>
           <tr>
            <th className="itemTd">Name</th>
            <th className="itemTd">Age</th>
            <th className="itemTd">Positon</th>
            <th className="itemTd">Sex</th>
            <th className="itemTd">Opration</th>
           </tr> 
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    )
  }
}
