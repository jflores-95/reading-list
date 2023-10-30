import React,{useState} from 'react'
import * as Styled from './BookCard.styled'
import Button from '../Buttons/Button'
import { useAtom } from 'jotai';
import {isFavorite, favoritesAtom} from '../../atoms/atoms'
import Modal from '../Modal/Modal'; 


export default function BookCard({book}) {
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const onClickBook = () => {

  }

  const handleFavorite = (book) => {
    setFavorites(book);
  }


  return (
    <>
    <Styled.Wrapper >
    <Styled.Cover onClick={() => {onClickBook(book)}} src={book.cover}></Styled.Cover>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <div style={{border: "1px solid white"}}>
            <h1>  {book.title}</h1>
          </div>
      </Modal>
    <Styled.Title>{book.title}</Styled.Title>
    <Styled.Author>{book.author.name}</Styled.Author>
    <Button type={ isFavorite(favorites, book) ? "delete" : "primary"} 
      onClick={() => {handleFavorite(book)}}>
      {isFavorite(favorites,book) ? "Remove from" : "Add to " } favorites</Button>
    
    </Styled.Wrapper>
     
     
    </>
  )
}
  