import React from 'react';
import Title from './Components/Title';
import Info from './Components/Info';
const APIkey = 'b91ba3c6';
const api = `http://www.omdbapi.com/?t=notebook&apikey=${APIkey}&`;

class App extends React.Component {
  state = {movieInfo: null}
  selectedMovie = {
  "title": "Demolition Man",
  "rating": 10,
  "release_year": 1993};
  getMovieData = () => {
    fetch(api).then(response => response.json()
    ).then(result => this.setState(
        {
          movieInfo: result
        },
        () => console.log(this.state.movieInfo)
      )
      );
  };
  render() {  
  return (
      <div className="App">
        <Info movie={this.selectedMovie}/>
        {/* <Title movie={this.selectedMovie}/> */}
      </div>
    );
  };
};
export default App;
