import { Container } from "./style";

export function Button({title, links, ...rest}) {
 return(
    <Container type="button" {...rest} >
      <a href={links} target='_blank' >{title}</a>
    </Container>
 )
}

