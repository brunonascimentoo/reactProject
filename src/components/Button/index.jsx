import { Container } from "./style";

export function Button({title, links}) {
 return(
    <Container type="button" >
      <a href={links}>{title}</a>
    </Container>
 )
}

