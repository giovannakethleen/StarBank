import styled  from "styled-components";

export const Container = styled.button` 
width: 100%;
background-color: #005200;
color: white;

height: 40px;
width: 50%;

border: 0;
padding: 0 16px;
margin-top: 16px;
border-radius: 10px;
font-weight: 500;

align-self: center;


&:disabled{
    opacity: 0.5;
}


`;