import styled from 'styled-components'

export const Modal = styled.div`
position: fixed;
    inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    z-index: 999;
    padding: 40px 20px 20px;
`

export const ModalContent = styled.div`
width: 100%;
height: 100%;
background-color: #282c34;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
`