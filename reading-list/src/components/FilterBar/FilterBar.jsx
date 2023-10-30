import React, { useEffect } from 'react'
import * as Styled from './FilterBar.styled'
import { getAllBooksAtom, genresAtom } from '../../atoms/atoms'
import { useAtom } from 'jotai';



export default function FilterBar({
}) {
  const [allBooks] = useAtom(getAllBooksAtom);
  const [allGenres] = useAtom(genresAtom);
  
  return (
   <Styled.Container>
     <Styled.DropDown>
     <option  key="All" value={"All"} selected>All</option>  
     {
       allGenres.map((genre) => {
        return <option  key={genre} value={genre} >{genre}</option>  
       })
     }
     </Styled.DropDown>
    
   </Styled.Container>
  )
}
