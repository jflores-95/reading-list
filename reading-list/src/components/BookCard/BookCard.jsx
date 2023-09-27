import React from 'react'
import * as Styled from './BookCard.styled'
export default function BookCard({book}) {
  const onClickBook = (book) => {
    alert(book.title)

  }
  return (
    <>
    <Styled.Wrapper >
    <Styled.Cover onClick={() => {onClickBook(book)}} src={book.cover}></Styled.Cover>
    <Styled.Title>{book.title}</Styled.Title>

          
    </Styled.Wrapper>
     
     
    </>
  )
}
