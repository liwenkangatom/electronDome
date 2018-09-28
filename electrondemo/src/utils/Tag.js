import uuid from './UUID'
export default class Tag {
  constructor(title, pid) {
    this.title = title
    this.pid = pid
    this.pkey = uuid()
  }
  getTitle = () =>{
    return this.title
  }
  getParent = () => {
    return this.pid
  }
  getPkey = () => {
    return this.pkey
  }
  rename = (name) => {
    this.title = name 
  } 
  isKey = (key) => {
    if(key == this.pkey){
      return true
    }else{
      return false
    }
  }
  toPureEntity = () => {
    return {
      key: this.pkey,
      title: this.title,
      pid: this.pid
    }
  }
  
}