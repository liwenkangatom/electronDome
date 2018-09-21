import React, { Component } from 'react'

export default class StaffFooter extends Component {
  render() {
    return (
      <div>
        <h4>AddStaff</h4>
        <hr/>
        <form action="#" className="addForm">
          <div className="inputPanel">
            <label htmlFor="stuffAddName">Name</label>
            <input type="text" id="stuffAddName" ref="addName" placeholder="Your Name"/>
          </div>
          <div className="inputPanel"><label htmlFor="stuffAddAge">Age</label>
            <input type="text" id="stuffAddAge" ref="addAge" placeholder="Your Age(0-150)"/>
          </div>
          <div className="inputPanel"><label htmlFor="stuffAddSex">Sex</label>
            <select name="Sex" id="stuffAddSex" ref="addSex">
              <option value="1">男</option>
              <option value="0">女</option>
            </select>
          </div>
          <div className="inputPanel"><label htmlFor="stuffAddId">Position</label>
            <select name="role" id="stuffAddId" ref="addId">
              <option value="derictor">Derictor</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="trainee">Trainee</option>
            </select>
          </div>
          <div className="inputPanel"><label htmlFor="stuffAddDescrip">Descrip</label>
            <textarea name="descrip" id="stuffAddDescrip" cols="30" rows="10" ref="addDescrip"></textarea>
          </div>
          <p className="tips" ref="tips">Success</p>
          <p className="tips" ref="tipsInfoError">Please Enter complate info</p>
          <p className="tips" ref="tipsAgeError">Illegle age</p>
          <div className="sumit"><button>SUMIT</button></div>
        </form>
      </div>
    )
  }
}
