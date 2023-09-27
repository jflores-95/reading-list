import React from "react";
import BookCard from "../BookCard/BookCard";
import * as Styled from "./BookGrid.styled";

export default function BookGrid({ books }) {

  return (
    <>
      <Styled.Container>
        {books?.map((book) => {
          return (
            <>
              <BookCard book={{ ...book.book }} />
            </>
          );
        })}
      </Styled.Container>
    </>
  );
}
