import { SearchResult } from './SearchResult'
import './SearchResultList.css'

export const SearchResultList = ({ results, setPickedElem }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} setPickedElem={setPickedElem} />
      })}
    </div>
  )
}