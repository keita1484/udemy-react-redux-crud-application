import React from 'react';

// クラスコンポーネント
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked!")}}></input>
      </React.Fragment>
    )
  }
}

// 関数コンポーネント
// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked!")}}></input>
//     </React.Fragment>
//   );
// }

export default App;