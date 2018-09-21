import React, { Component } from 'react'

export default class StaffDetail extends Component {
  render() {
    const { staffDetail } = this.props.staffDetail
    if(!staffDetail) {
      return null
    }
    return (
      <div>
      <div className="overlay">
        <h4>Enter 'SUMIT' to store changes, Enter 'CLOSE' quit change.</h4>
        <hr/>
        <table ref="editTable">
          <tbody>
            <tr>
              <th>Name</th>
              <td><input type="text" id="staffEditName" defaultValue={staffDetail.info.name}/></td>
            </tr>
            <tr>
              <th>Age</th>
              <td><input type="text" id="staffEditAge" defaultValue={staffDetail.info.age}/></td>
            </tr>
            <tr>
              <th>Sex</th>
              <td>
                <select name="sex" id="staffEditSex" ref="editSex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Position</th>
              <td>
                <select name="position" id="staffEditPosition" ref="editPosition">
                  <option value="derictor">Derictor</option>
                  <option value="teacher">Deacher</option>
                  <option value="student">Student</option>
                  <option value="trainee">Trainee</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Descrip</th>
              <td>
                <textarea name="descrip" id="staffEditDescrip" cols="30" rows="10" defaultValue={staffDetail.info.descrip}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="tips" ref="editTips">Change Success!</p>
        <p className="tips" ref="editTipsError">Please enter complate info</p>
        <p className="tips" ref="editTipsAgeError">Illegle Age</p>
        <button>SUMIT</button><button>CLOSEs</button>
      </div>
      </div>
    )
  }
}
