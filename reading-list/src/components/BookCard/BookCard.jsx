import React,{useState} from 'react'
import * as Styled from './BookCard.styled'
import Button from '../Buttons/Button'
import { useAtom, atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import Modal from '../Modal/Modal';

const favoritesAtom = atomWithStorage('favoriteBooks', []);
export default function BookCard({book}) {
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const [isOpen, setIsOpen] = useState(false);

  const onClickBook = () => {
    setIsOpen(true)
  }

  const addAsFavorite = (book) => {
    setFavorites(prev => [...prev, book])
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

    <Button onClick={() => {addAsFavorite(book)}}>Add to favorites</Button>
    
    </Styled.Wrapper>
     
     
    </>
  )
}
