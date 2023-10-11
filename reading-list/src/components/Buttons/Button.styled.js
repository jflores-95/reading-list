import  { styled } from 'styled-components'

const sizes = {
    small: "12px",
    medium: "14px",
    large: "16px"
}

const buttonType = {
    primary: "#5EDFE3", 
    secondary: "#FFF",
    delete: "#FF3333"
}

export const Button = styled.button`
    width: ${(props) => props.width};
    padding: 7px 16px 7px 16px;
    border: none;
    background-color: ${(props) => buttonType[props.type]};
    border-radius: ${(props) => sizes[props.size]};
    color: #2C3131;
    font-family: 'Helvetica Neue';
    ${(props) => {
        if(props.size === "large"){
            return `font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.14px;`
        } else {
            return `font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.14px;`
        }
    }}
    transition: background-color 300ms ease-out;

    &:hover {
        background-color: ${(props) => (props.type === 'primary' ? '#4accc4' : '#EEE')};

    }
`