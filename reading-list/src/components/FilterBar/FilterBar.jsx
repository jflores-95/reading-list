import React from 'react'
import * as Styled from './FilterBar.styled'

export default function FilterBar({
  books,
  handleFilter = () => {}
}) {
 
  return (
   <Styled.Container>
     <button onClick={handleFilter(true)}>x</button>
   </Styled.Container>
  )
}
