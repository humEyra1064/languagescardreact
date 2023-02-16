import { Container, Image } from "react-bootstrap"


const Language = ({name,img,options}) => {
  return (
   <Container>
   <Container>
    <Image src={img} width="70%"></Image>
    <h3 className="display-6">{name}</h3>
   </Container>
   <ol>
    {options.map((item)=>{
      return(
        <li>{item}</li>
      )
    })}
   </ol>
   </Container>
  )
}

export default Language
