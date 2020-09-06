import React, {Component,PureComponent } from "react";

// //PureComponent 代表纯组件，使用纯组件的时候，内部不能调用shouldComponentUpdate
// //纯组件内部进行浅比较（进行值的比较）
// //他会根据外部传入的属性是否一致，新的属性与旧的属性是否一致，如果一样的话，就不会走render了
// //引用类型：它会根据外部传入的地址，新的属性与旧的属性地址一致的话，就不会走render了。
// //这样可以提高性能，要实现PureComponent的效果，要用普通组件 Component + shouldComponentUpdate 实现
// export default class Three extends PureComponent {
//   constructor(){
//     super();
//     this.state = {
//       isShow: false,
//       arr: [1, 2]
//     }
//   }

//   // shouldComponentUpdate(nextProps, nextState){
//   //   return this.props.flag !== nextProps.flag;
//   // }
//   render() {
//     console.log("Three -- rander");
//     // let { item, handleChange } = this.props;
//     return (
//       <div>
//         {/* <input
//           type="checkbox"
//           checked={item.flag}
//           onChange={handleChange.bind(this, item.id)}
//         />
//         {item.txt} */}
//         {this.state.isShow.toString()}
//         <button onClick = {() => {this.setState({isShow: true})}}>点击</button>
//         <ul>
//           {
//             this.state.arr.map(item => {
//               return <li key = {item}>{item}</li>
//             })
//           }
//         </ul>
//         <button onClick = {() => {
//           // this.state.arr.push(3);
//           // this.setState({arr: this.state.arr});

//           //引用数据类型下  在 PureComponent中使用，需要对数组进行展开
//           this.setState({
//             arr: [...this.state.arr, 3]
//           })

//         }}>添加3</button>
//       </div>
//     );
//   }
// }


//如果只是从外部接收属性，然后内部渲染jsx代码，我们强烈建议写成无状态组件。
export default React.memo(function (props) {
  let {item, handleChange} = props;
  console.log("Three -- render")
  return (
    <div>
      <input
        type="checkbox"
        checked={item.flag}
        onChange={handleChange.bind(this, item.id)}
      />
      {item.txt}
    </div>
  );
})
