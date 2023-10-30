import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const favoritesBaseAtom = atomWithStorage('favorites', []);

const fetchBooks = () => {
  return fetch('/books.json')
    .then(response => response.json())
    .then(res => res.library);
}

export const getAllBooks = async () => {
  const books = await fetchBooks();
  return books;
};

export const favsAtom = atom((get) => { 
    return get(favoritesBaseAtom);
});

const allBooksAtom = atom(getAllBooks());

export const getAllBooksAtom = atom((get) => {
  return get(allBooksAtom);
}) 

const filteredBooksAtom = atom(getAllBooks());

export const getFilteredBooks = atom (
  (get)=>{
  return get(filteredBooksAtom);
}, 
(set, books) => {
  set(filteredBooksAtom, books)
});

export const isFavorite = (favoriteBooks, book) => {
 return favoriteBooks.some((element)=> element.ISBN === book.ISBN);
}

export const favoritesAtom = atom(
    (get) => {
        return get(favoritesBaseAtom);
    },
    (get, set, book) => {
        const favoriteBooks = get(favoritesBaseAtom);
        let returnValue = favoriteBooks; 
        if(isFavorite(favoriteBooks, book)){
            returnValue = favoriteBooks.filter((element) => element.ISBN !== book.ISBN);
          } else {
            returnValue.push(book);
            returnValue = [...new Set(returnValue)];
          }

        set(favoritesBaseAtom, returnValue);
    }
)

export const genresAtom = atom(
  async (get) => {
    const allBooks = await getAllBooks(); 
    let genres = allBooks.map(element => element.book.genre);
    genres = [... new Set(genres)]
    return genres;
  }
);