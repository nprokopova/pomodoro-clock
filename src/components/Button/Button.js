import styled from 'styled-components/macro';


const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
justify-content: center;
background-color: inherit;
color: #783A4D;
border: none;
text-align: center;

&:hover:not([disabled]) {
    color:orange;
}

`
export default Button;