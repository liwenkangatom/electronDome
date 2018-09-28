export default function uuid() {

  // (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
  return (new Date().getTime()|(Math.random()+1)*0x10000).toString().substring(1)

}