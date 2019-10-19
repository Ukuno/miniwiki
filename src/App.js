// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';

import Header from './componet/layout/Header';
import Search from './componet/search/Search'
import './App.css';

const headerStyle = {
  top: "500px"
 }

export class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <div style={headerStyle}>
        <div className="row">
        <div className="col col-lg-4">

        </div>
        <div className="col-sm-8 col-lg-4">
        <Search />
        </div>
        <div className="col col-lg-4">

        </div>
        </div>
       
        </div>
       
      
      </div>
    )
  }
}

export default App
