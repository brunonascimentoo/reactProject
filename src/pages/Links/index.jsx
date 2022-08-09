import { Button } from "../../components/Button";
import { Container } from "./style";

export function Links() {
    return (
        <Container>
       <header>
       <img src='https://github.com/capbruno.png' />
       <h3>Bruno Nascimento</h3>
       <span>@brunonnascimento_</span>
       </header>
        <Button title='💻 Linkedin' links='https://www.linkedin.com/in/brunonascimento1996/'/>
        <Button title='🐱 Github' links='https://github.com/capbruno'/>   
        <Button title='📷 Instagram' links='https://www.instagram.com/brunonnascimento_/' />
        <Button title='📱 Facebook' links='https://www.facebook.com/profile.php?id=100067153975680'/>

        <h4>Feito por Bruno Nascimento</h4>
        </Container>
        
    );
}