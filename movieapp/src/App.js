import React, {useEffect, useState} from 'react';
import MovieInfo from './components/movieInfo';
import './App.css';


const App = () => { 

    

    //set state = to whatever data we want from API as a minilibrary
      const [searchData, setSearchData] = useState([]);
    //set state to be able to input data in searchbar, set to empty string to manipulate
      const [search, setSearch] = useState("");
    //set state to ONLY submits itself when submit is clicked
      const [query, setQuery] = useState("Shrek");
  

    // useEffect - a function that runs everytime a page loads. make a request ONCE with [] 
    useEffect(()=> {
      getSearchResults();
    }, [query]);


      const getSearchResults = async () => {
      const response = await fetch (`http://www.omdbapi.com/?apikey=d5c18456&s=${query}`);
      const data = await response.json();
      setSearchData(data.Search);
      console.log(data.Search);
    };

      
    // Add data the search bar and add 
    // function for onChange in input
    // for every letter input API IS FETCHING
      const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
      };
    
    // run this when SUBMIT is hit, 
      const getSearch = e =>{
        e.preventDefault();
        // set query = to search state 
        setQuery(search);
      };

    return (
      <div className="App">
        <h1 className="header">POPCORN MANIA</h1>
        <form onSubmit={getSearch} className="searchForm" >
          <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      
    
        {/* 
        Take the "searched" data from STATE
        pass down into PROPS
        then display in the external component
        //output via .map the data you want */}

        <div className="movieDiv">
        {searchData.map(info =>(
          <MovieInfo 
          title={info.Title}
          year={info.Year}
          description={info.Type}
          imdb={info.imdbID}
          image={info.Poster}
          />
        ))}
        </div>
      </div>
    
    );
  };


export default App;


