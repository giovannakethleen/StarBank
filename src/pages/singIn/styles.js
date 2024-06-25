import styled from "styled-components";
import backgroundImg from"../../assets/bg.jpg"

export const Container = styled.div`
 height: 100vh;
 display: flex;
 align-items:stretch;
 margin-left: 30px;
 background-color: #8fc5a3;

`;



export const Form = styled.form` 
margin: 10px 20px;
background-color: #8fc5a3;
opacity: 75%;


display: flex;
flex-direction: column;
justify-content: center;


>h1{
  font-family: "Sonsie One";
  color: #005200;
  text-align: center;
  font-size: 48px;
  font-style: normal;
}

>h2{
    font-size: 24px;
    margin: 50px 0 18px;
    text-align: center;
    color: #005200;
}

>p{
    font-size: 18px;
    color: #005200;
    text-align: center;
}

a{
    margin: 42px auto;

    color: #005200;
    
    display: flex;
    align-items: center;
    gap: 2px;    
}

`;

export const Background = styled.div`
    margin: 0 45px;
    background-color: #005200;
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 75%;
    
`