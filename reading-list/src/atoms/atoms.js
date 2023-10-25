import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const favoritesBaseAtom = atomWithStorage('favorites', []);
export const favsAtom = atom((get) => { 
    return get(favoritesBaseAtom);
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