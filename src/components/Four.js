import React, { Component } from 'react'

export default class Four extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
  }
  componentDidMount(){
    this.addM()
    this.timer = setInterval(() => {
      this.add();
    }, 2000);
  }
  addM(){
    /*
    for(var i = 0; i < 10; i++){
      this.add();
      // 他会将所有的操作通过Object.assgin() 进行合并
    }
    */
   for(var i = 0; i < 10; i++){
     this.add();
   }
  }

  //返回数据更新前的状态
  //返回的值，可以被componentDidUpdate的第三个参数接收。
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate---", this.node.scrollHeight)
    return this.node.scrollHeight;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    let dis = this.node.scrollHeight - snapshot;
    //滚动高度，加上
    this.node.scrollTop = this.node.scrollTop + dis;
    console.log("componentDidUpdate---", snapshot);
  }
  add(){
    this.setState((prevState) => {
      return {
        list: [prevState.list.length, ...prevState.list]
      }
    })
  }
  render() {
    return (
      <div ref = {el => this.node = el} style = {{height:"300px", overflow: "auto"}}>
        {
          this.state.list.map((item, index) => {
            return <li key = {index}>{item}</li>
          })
        }
      </div>
    )
  }
}
