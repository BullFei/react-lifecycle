import React, { Component } from "react";

// let a = 100;

export default class Two extends Component {

  //shouldComponentUpdate自身状态发生变化，或者外部传入的属性发生改变的时候
  //询问组件是否进行更新操作，如果不写，默认返回true，就代表组件要更新了。接下来就执行render
  //如果这个钩子函数返回false，就代表不让组件进行更新，就不会去执行render
  //这个钩子函数就可以根据返回true或者返回false，来去提升react性能。
  //这个钩子函数，参数就是最新的属性与最新的状态，而通过this.props.xxx 获取的是之前的属性
  shouldComponentUpdate(nextProps, nextState){
    console.log("Two -- shouldComponentUpdate...", this.props.flag, nextProps.flag);
    return this.props.flag !== nextProps.flag;
  }
  render() {
    console.log("Two -- rander");
    let { item, handleChange } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={item.flag}
          onChange={handleChange.bind(this, item.id)}
        />
        {item.txt}
        {/* 强制更新 */}
        {/* {a} <button onClick = {() => {a++; this.forceUpdate()}}>强制更新</button> */}
      </div>
    );
  }
}
