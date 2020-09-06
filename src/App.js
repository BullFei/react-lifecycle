import React, { Component } from "react";
// import One from './components/One'
// import Two from "./components/Two";
import Three from './components/Three'

class App extends Component {
  //构造函数的应用点？
  //1. 初始化组件的状态  this.state 初始化内部state
  //2. 可以给一些事件函数，绑定this指向 为事件处理函数绑定事件
  //【注】在构造函数里不能 调用 this.setState() 没必要
  constructor() {
    super();
    console.log("App--constructor...1");
    this.state = {
      n: 1,
      list: [
        {
          id: 1,
          txt: "aa",
          flag: false,
        },
        {
          id: 2,
          txt: "bb",
          flag: false,
        },
        {
          id: 3,
          txt: "cc",
          flag: false,
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      n: this.state.n + 1,
    });
  }

  componentDidMount() {
    //一般在这里更新组装状态。
    console.log("App--componentDidMount...3");
  }

  handleChange = (id) => {
    let list = this.state.list.map((item) => {
      if (item.id === id) {
        item.flag = !item.flag;
      }
      return item;
    });
    this.setState({
      list,
    });
  }
  render() {
    let { list } = this.state;
    console.log("App--render...2");
    return (
      <div>
        {/* <button onClick = {this.handleClick}>更改自身的状态</button> */}
        {/* <One n = {this.state.n}/> */}
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                {/* <Two flag = {item.flag} item = {item} handleChange = {this.handleChange}></Two> */}
                <Three flag = {item.flag} item = {item} handleChange = {this.handleChange}></Three>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
