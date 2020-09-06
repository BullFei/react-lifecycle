import React,{Component} from 'react';
import One from './components/One'


class App extends Component {
  //构造函数的应用点？
  //1. 初始化组件的状态  this.state 初始化内部state
  //2. 可以给一些事件函数，绑定this指向 为事件处理函数绑定事件
  //【注】在构造函数里不能 调用 this.setState() 没必要
  constructor(){
    super();
    console.log("App--constructor...1");
    this.state = {
      n: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      n: this.state.n + 1
    })
  }

  componentDidMount(){
    //一般在这里更新组装状态。
    console.log('App--componentDidMount...3');
  }
  render(){
    console.log( 'App--render...2');
    return (
      <div>
        <button onClick = {this.handleClick}>更改自身的状态</button>
        <One n = {this.state.n}/>
      </div>
    )
  }
}

export default App;
