import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [text, setText] = useState();
  const [movie, setMovie] = useState([]);

  const changeText = (e) => {
    setText(e.target.value);
  };
  const fetchMovie = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=db4722b6`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
  };

  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="title">Movie-List </h1>
          <h4> Search Your Favorite Movie </h4>

          <form className="d-flex" onSubmit={fetchMovie}>
            <input
              id="Inpt"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={text}
              onChange={changeText}
            />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="create"><p>Created by Yogita</p></div>
      <div id="container">
        <div className="row">
          {movie.map((value, index) => {
            return (
              <div className="card" style={{ width: '18rem' }}>
                <img src={value.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.Year}</h5>
                  <p className="card-text">{value.Title}</p>
                  {/* <button className="btn btn-primary">
              
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
    </>
  );
};
export default App;


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


