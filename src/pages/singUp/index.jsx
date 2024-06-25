import {FiArrowLeft, FiUser, FiMail, FiLock} from "react-icons/fi";

import{Link} from'react-router-dom';


import { Input } from "../../components/input";
import { Button } from "../../components/button";

import {Container, Form, Background} from "./styles";


export function SignUp (){
    return(
        <Container>
           
            <Form>
                <h1> StarBank </h1>
                <p>  Acompanhe toda sua vida financeira </p>
                <h2> Crie sua conta</h2>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />

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

            <Button title="Cadastrar"/>

            <Link to="/" > 
               <FiArrowLeft/>  
               Voltar para o login         
            </Link>
           
            
            </Form>

            <Background/>
            
        </Container>

    );
}