import React from 'react'

// this is for rendering books only
export default function BookGrid({books}) {
  return (
    <>
      {books?.map((book) => {
        return ( <><div key={book.book.title} >{book.book.title}</div></>)
      })}
    </>
  )
}
