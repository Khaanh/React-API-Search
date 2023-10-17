import { useState } from "react"

export const SearchPicked = ({ pickedElem }) => {

  return (
    <h2 style={{ marginBottom: '16px' }}>You picked: <i>{pickedElem}</i></h2>
  )
}