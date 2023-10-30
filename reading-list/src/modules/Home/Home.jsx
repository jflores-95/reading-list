import React, { useLayoutEffect, useState} from "react";
import BookGrid from "../../components/BookGrid/BookGrid.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import * as Styled from "./Home.styled.js";
import {atom, useAtom} from 'jotai'

const booksAtom = atom(null)
export const  Home = () =>{
    const [books, setBooks] = useAtom(booksAtom);
   
    useLayoutEffect(() => { 
       fetch('/books.json')
       .then(response => response.json())
       .then(res => {
         setBooks(res.library)
        })
    }, [])
  
  
  return (
    <>
        <Styled.Header>
            <Styled.Title>Bookloop  </Styled.Title>
        </Styled.Header>
        <FilterBar /> 
        <BookGrid books={books}/>
        
    </>
  );
};
