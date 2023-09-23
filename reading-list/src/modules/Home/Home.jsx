import React, { useEffect , useState} from "react";
import BookGrid from "../../components/BookGrid/BookGrid.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import * as Styled from "./Home.styled.js";

export const  Home = () =>{
    const [books, setBooks] = useState()
    useEffect(() => { 
       fetch('/books.json')
       .then(response => response.json())
       .then(res => setBooks(res.library))
    }, [])
    
  return (
    <>
        <Styled.Header>
            <Styled.Title>The Secret Book Club </Styled.Title>
        </Styled.Header>    
        <FilterBar/>
        <BookGrid books={books}/>
      
    </>
  );
};
