import React, { PureComponent, memo, useState } from "react";

const Try = memo(({ tryInfo }) => {
  // const [result, setResult] = useState(tryInfo.result);
  // const onClick = () => {
  //   setResult(1);
  // };
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
      {/* <button onclick={onClick}>{result}</button> */}
    </li>
  );
});

// class Try extends PureComponent {
//   state = {
//     result: this.props.render,
//     try: this.props.try,
//   };

//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }
export default Try;
