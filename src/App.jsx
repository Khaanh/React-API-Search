import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
// import { SearchResult } from './components/SearchResult';
import { SearchResultList } from './components/SearchResultList';
import { SearchPicked } from './components/SearchPicked';



function App() {
  const [results, setResults] = useState([]);
  const [pickedElem, setPickedElem] = useState(null);


  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchPicked pickedElem={pickedElem} />
        <SearchBar setResults={setResults} />
        <SearchResultList results={results} setPickedElem={setPickedElem} />
      </div>
    </div>
  )
}

export default App
