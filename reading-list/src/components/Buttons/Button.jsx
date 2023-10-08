import React from 'react'
import * as Styled from './Button.styled'

export default function Button({
    type="primary",
    size="large",
    width="fit-content",
    onClick=()=>{},
    children
}) {
  return (
   <Styled.Button width={width} type={type} size={size} onClick={onClick}>{children}</Styled.Button>
  )
}


