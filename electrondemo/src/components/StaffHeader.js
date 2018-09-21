import React, { Component } from 'react'

export default class StaffHeader extends Component {
  render() {
    return (
      <div>
     
        <table>
        <tbody>
          <tr>
            <td className="headerTd"><input type="text" placeholder='Search'/></td>
            <td className="headerTd">
              <label htmlFor="idSelect">Select Character</label>
              <select name="character" id="idSelect">
                <option value="1">All</option>
                <option value="2">Director</option>
                <option value="3">Teacher</option>
                <option value="4">Student</option>
                <option value="5">Trainee</option>
              </select>
            </td>
            <td className="headerTd"><label htmlFor="orderSelect">Order</label>
              <select name="orderType" id="orderSelect">
                <option value="1">Position</option>
                <option value="2">AgeAsc</option>
                <option value="3">AgeDesc</option>  
              </select>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }
}
