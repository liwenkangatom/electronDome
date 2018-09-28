import TAG from '../entities/Tag'
export default class TagTree {
  constructor(TagListArray) {
    console.log("进入tagtree类中", TagListArray)
    this.tagList = TagListArray
    this.entityList = this.arrayToEntityList(TagListArray)
    this.tagTree = this.transListToTree(TagListArray) 
  }
  transListToTree=(List)=>{
    let a = JSON.parse(JSON.stringify(List))
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
  tansEntitiesToTree = (Tags) => {
    let HashList = {}
    let result = []
    Tags.map((tag) => {
      HashList[tag.getpKey()] = tag.toPureEntity()
    })
    Tags.map((tag) => {
      let result = []
      let hashFather = HashList[tag.getParent()]
      if (hashFather) {
        if (!hashFather.children) {
          hashFather.children=[]
        }
        hashFather.children.push(tag.toPureEntity())
      } else {
        result.push(tag.toPureEntity())
      }
      result.push(tag)
    })
    return result
  }
  arrayToEntityList=(array)=> {
    // 当数据转换为实体类的时候 可以在这里做 验证数据的合法性
    let TagEntities = [] 
    for(let item in array){
      const title = array[item].title
      const pid = array[item].pid
      const tag = new TAG(title, pid)
      TagEntities.push(tag)
    }
    return TagEntities
  }
  // entityListToArray = ()
  searchNode=(Str)=>{
    let keys = []
    const tmp = this.tagList
    keys = tmp.map((item) => {
      if (item.title.toLowerCase().indexOf(Str.toLowerCase()) > -1) {
        return item.pid + ''
      }
      return null
    }).filter((Str, index, self) => Str && self.indexOf(Str.toLowerCase()) === index)
    return keys
  }
  deleteNode=(key)=>{
    let data = this.tagList
    let pid = null
    for(let k in data){
      if(data[k].key === key){
        pid = data[k].pid
        data.splice(k,1)
      }
      if(data[k].pid === key) {
        data[k].pid = pid
      }
    }
    this.entityList = this.arrayToEntityList(data)
    this.tagTree = this.transListToTree(data)
    return this.tagTree
  }
  addNode=(Tag)=>{
    this.entityList.push(Tag)
    this.tagList.push(Tag.toPureEntity())
    this.tagTree = this.transListToTree(this.tagList)
    return this.tagTree
  }  
  getNode=(key)=> {
    let tags = this.tagList
    for(let tag of tags){
      if(tag.key === key){
        return  tag
      }
    }
    return null
  }
  getTree=()=>{
    return this.tagTree
  }
  getList=()=>{
    return this.tagList
  }
  isRoot = (key) => {
    const gData = this.tagList
    for (let item in gData) {
      if (gData[item].key === key && gData[item].pid === null) return true
    }
  }
  getRootKeys = (expandKeys) => {
    expandKeys = Array.from(new Set(expandKeys))
    let tmp = {} 
    let rootkeys = []
    const list = this.tagList
    list.map((item)=>{
      tmp[item.key] = item.pid
    })
    expandKeys.map((item)=> { 
      while(tmp[item] !== null) {
        item = tmp[item]
      }
      rootkeys.push(item)
    })
    return Array.from(new Set(rootkeys))
  }
}