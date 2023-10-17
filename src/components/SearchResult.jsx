import './SearchResult.css'


export const SearchResult = ({ result, setPickedElem }) => {

  const handlePick = (e) => {
    setPickedElem(e.target.outerText)
    // pickedElement = e.target.outerText;
    console.log(e.target.outerText);
  }
  return (<div className='search-result' onClick={(e) => handlePick(e)}>
    {result.name}
  </div>)
}
