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

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
        <div className="col">

        </div>
        <div className="col-8">
        <Search />
        </div>
        <div className="col">

        </div>
        </div>
       
      
      </div>
    )
  }
}

export default App
