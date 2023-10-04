import React from 'react'

export default function Button({
    type="default",
    onClick=()=>{},
    children
}) {
  return (
   <button type={type} onClick={onClick}>{children}</button>
  )
}
