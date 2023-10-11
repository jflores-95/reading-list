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


/**
 * Button component
 * @param {string} type - Could be primary or secondary
 * @param {number} size - Could be small for 12px, medium for 14px or large for 16px
 * @param {any} width - Any value that will go in the width attribute in css, in example: fit-content, 15px, etc.
 * @param {Function} Function that will be executed when the button is clicked
 */