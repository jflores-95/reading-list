import React, { useEffect , useState} from "react";
import BookGrid from "../../components/BookGrid/BookGrid.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import * as Styled from "./Home.styled.js";

export const  Home = () =>{
    const [books, setBooks] = useState();
    const [showFilter, setShowFilter] = useState(false)
    useEffect(() => { 
       fetch('/books.json')
       .then(response => response.json())
       .then(res => {
         setBooks(res.library)
        })
    }, [])
  
  const handleClickShowFilter = (currentFilterState) => {
    setShowFilter(!currentFilterState)
  }
  
  

  return (
    <>
        <Styled.Header>
            <Styled.Title>The Secret Book Club </Styled.Title>
        </Styled.Header>    
        <button onClick={() => handleClickShowFilter(showFilter)}>Filters</button>
        {showFilter && <FilterBar books={books} handleFilter={() => handleClickShowFilter}/> }
        <BookGrid books={books}/>
      
    </>
  );
};
