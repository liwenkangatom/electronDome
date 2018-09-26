import React, { Component } from 'react'
import { Tree } from 'antd';
import ChangeInput from './ChangeInput'
import AddInput from './AddInput'
const TreeNode = Tree.TreeNode
export default class EditTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gData: [
        {key: 0, title: 'test1', pid: null},
        {key: 1, title: 'test2', pid: null},
        {key: 2, title: 'test3', pid: 0},
        {key: 3, title: 'test4', pid: 1}, 
        {key: 4, title: 'test5', pid: 0},
        {key: 5, title: 'test6', pid: 4}

      ],
      treeData: [],
      expandKeys:[2, 3, 5],
      shownKeys: [0,1],
      addKey:'',
      selectedKeys: [],
      nodeMode: true,
      hasSon: false
    }
  }
  
  componentWillMount() {
    this.setState({
      treeData: this.trans(this.state.gData),
    })
  }

  isRoot = (key) => {
    const { gData } = this.state
    // const tmp = JSON.parse(JSON.stringify(gData))
    for (let item in gData) {
      console.log('itemm', gData[item])
      if (gData[item].key === key && gData[item].pid === null) return true
      // else return false
    }
  }
  showRootKeys = (expandKeys) => {
    expandKeys = Array.from(new Set(expandKeys))
    let tmp = {} 
    let showrootkeys = []
    const list = this.state.gData
    list.map((item)=>{
      tmp[item.key] = item.pid
    })
    expandKeys.map((item)=> { 
      while(tmp[item] !== null) {
        item = tmp[item]
      }
      showrootkeys.push(item)
    })
    return Array.from(new Set(showrootkeys))
  }
  trans = (gdata) => {
     // 参数断开引用
  let a = JSON.parse(JSON.stringify(gdata))
  let r = [], hash = {}
  for (let i in a) {
      hash[(a[i].key)] = a[i];
  }
  for (let j in a) {
      let aVal = a[j]
      let hashVP = hash[aVal.pid];
      if (hashVP) {
          // !hashVP[children] && (hashVP[children] = []);
          if(!hashVP.children) hashVP.children = []
          hashVP.children.push(aVal);
      } else {
          r.push(aVal);
      }
  }
  return r;
  }



  node = (key, text, son='', addKey) => {
    const { shownKeys } = this.state
    return (
      (shownKeys.indexOf(key) ==-1 && this.isRoot(key) )?'':
       <TreeNode key={key} title={<ChangeInput display={text} key={key}></ChangeInput>}>
            {(key === addKey)?<TreeNode title={<AddInput></AddInput>}></TreeNode>:''}
            {son}
       </TreeNode>
    )
  }
  loop = (treeData) => treeData.map((item) => {
      if(item.children && item.children.length) {
      return this.node(item.key, item.title, this.loop(item.children), this.state.addKey)
    }
    return this.node(item.key, item.title)

    
  })
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({addKey:2})}>hasSon</button>
        <Tree>
         {this.loop(this.state.treeData)}
        </Tree>
      </div>
    )
  }
}
