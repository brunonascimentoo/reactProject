import { Button } from "../../components/Button";
import { Container } from "./style";

export function Links() {
    return (
        <Container>
       <img src='https://github.com/capbruno.png' />
       <h3>Bruno Nascimento</h3>
        <Button title='🎬 Youtube' links='https://www.youtube.com'/>
        <Button title='📷 Instagram' />
        <Button title='💻 Facebook'/>
        <Button title='🐱 Github'/>   
        </Container>
        
    );
}