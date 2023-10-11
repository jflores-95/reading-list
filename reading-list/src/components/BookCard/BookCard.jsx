import React,{useState} from 'react'
import * as Styled from './BookCard.styled'
import Button from '../Buttons/Button'
import { useAtom, atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import Modal from '../Modal/Modal'; 

let favoriteBooks = JSON.parse(localStorage.getItem('favorites')) || [];
const favoritesAtom = atomWithStorage('favorites', favoriteBooks);

export default function BookCard({book}) {
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const [isOpen, setIsOpen] = useState(false);

  const onClickBook = () => {

  }

  const handleFavorite = (book) => {
      if(isFavorite(book)){
        favoriteBooks = favoriteBooks.filter((element) => element.ISBN !== book.ISBN);
      } else {
        favoriteBooks.push(book);
        favoriteBooks = [...new Set(favoriteBooks)];
      }
   
     
      setFavorites(favoriteBooks);
  }

  const isFavorite = (book) => {
    return favoriteBooks.some((element)=> element.ISBN === book.ISBN)
  }

  return (
    <>
    <Styled.Wrapper >
    <Styled.Cover onClick={() => {onClickBook(book)}} src={book.cover}></Styled.Cover>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <div style={{border: "1px solid white"}}>
            <h1>Hola {book.title}</h1>
          </div>
      </Modal>
    <Styled.Title>{book.title}</Styled.Title>
    <Styled.Author>{book.author.name}</Styled.Author>

    <Button type={ isFavorite(book) ? "delete" : "primary"} 
      onClick={() => {handleFavorite(book)}}>
      {isFavorite(book) ? "Remove from" : "Add to " } favorites</Button>
    
    </Styled.Wrapper>
     
     
    </>
  )
}
