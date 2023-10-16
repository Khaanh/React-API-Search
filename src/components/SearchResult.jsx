import { useContext } from 'react';
import './SearchResult.css'
import { ResultContext } from '../App';


export const SearchResult = ({ result }) => {
  const picked = useContext(ResultContext)

  const handlePick = (e) => {
    // pickedElement = e.target.outerText;
    console.log(e.target.outerText);
    console.log(picked);
  }
  return (<div className='search-result' onClick={(e) => handlePick(e)}>
    {result.name}
  </div>)
}
