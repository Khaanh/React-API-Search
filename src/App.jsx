import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
// import { SearchResult } from './components/SearchResult';
import { SearchResultList } from './components/SearchResultList';
import { SearchPicked } from './components/SearchPicked';
import { createContext } from 'react';


export const ResultContext = createContext('picked');

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <ResultContext.Provider value={'test'}>
        <div className="search-bar-container">
          <SearchPicked />
          <SearchBar setResults={setResults} />
          <SearchResultList results={results} />
        </div>
      </ResultContext.Provider>
    </div>
  )
}

export default App
