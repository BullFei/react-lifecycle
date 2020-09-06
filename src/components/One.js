import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class One extends Component {
  constructor(props){
    super(props);
    console.log("One--constructor...1", props);
    this.state = {
      oneN: props.n,
      prevProps: props,
      a: 1
    }
    // this.forceUpdate(); 强制更新不推荐
  }

  //组件卸载的时候执行
  componentWillUnmount(){
    console.log("One--componentWillUnmount...");
    clearInterval(this.timer); //卸载组件的时候，清空全局定时器与初始化的事件绑定。
  }


  //注意：这个钩子函数是属于类的，需要加static修饰符，静态方法里面不能使用this
  //获取派生状态来自props的属性
  //1. 定义组件的初始化状态
  //2. 这个方法需要有返回值（返回想要更新的状态）
  //当父组件传递新的属性的时候，这个钩子函数也会执行。
  //当外部的属性发生变化的时候，使其更改自身的状态。
  //如果就是想让自己组建的状态由外部传入的属性控制，那么就写成派生状态。
  static getDerivedStateFromProps(props, state){
    let prevProps = state.prevProps;
    const value = prevProps.n !== props.n ? props.n : state.oneN;
    console.log("One--getDirivedStateFromProps...2");
    return {
      oneN: value,
      prevProps: props
    };
  }

  // UNSAFE_componentWillMount(){
  //   console.log("UNSAFE_componentWillMount...")
  // }
  //当外部传入属性发生改变的时候，就会触发执行
  //【注】内部this.props.n 拿到的是上一次的属性，如果要获取最新的属性从参数里面
  // 这个钩子函数以后会被  getDerivedStateFromProps 替代
  //16.x的核心算法发生重大的变化，采用Fiber协调算法，可能会出现bug。
  // UNSAFE_componentWillReceiveProps(props, state){
  //   console.log("componentWillReceiveProps..." + this.props.n);
  //   this.setState({
  //     oneN: props.n
  //   })
  // }

  //官方建议在这个钩子函数里进行数据请求
  componentDidMount(){
    console.log('One--componentDidMount...4', ReactDOM);
    this.timer = setInterval(() => {
      this.setState({
        a: this.state.a + 1
      })
    }, 3000);
  }

  render() {
    console.log('One--render...3');
    return (
      <div>
        {/* One ====== {this.props.n} */}
        a ====== {this.state.a}
        <br/>
        One ====== {this.state.oneN}
        <br/>
        <button onClick = {() => {this.setState({oneN: 1000})}}>更改oneN状态</button>
        <button onClick = {() => {ReactDOM.unmountComponentAtNode(document.getElementById("root"))}}>卸载One组件</button>
      </div>
    )
  }
}
