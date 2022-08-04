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
        <Button title='🎬 Youtube' links='https://www.youtube.com'/>
        <Button title='📷 Instagram' links='https://www.instagram.com/brunonnascimento_/' />
        <Button title='💻 Facebook' links='https://www.facebook.com/profile.php?id=100067153975680'/>
        <Button title='🐱 Github' links='https://github.com/capbruno'/>   

        <h4>Feito por Bruno Nascimento</h4>
        </Container>
        
    );
}