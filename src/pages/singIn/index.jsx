import { FiMail, FiLock} from "react-icons/fi";

import{Link} from'react-router-dom';


import { Input } from "../../components/input";
import { Button } from "../../components/button";

import {Container, Form, Background} from "./styles";


export function SignIn (){
    return(
        <Container>
           
            <Form>
                <h1> StarBank </h1>
                <p>  Acompanhe toda sua vida financeira </p>
                <h2> Bem-vindo de volta </h2>

              
                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                />

            <Button title="Entrar"/>

            <Link to="/register" > 
               Criar conta      
            </Link>
           
            
            </Form>

            <Background/>
            
        </Container>

    );
}