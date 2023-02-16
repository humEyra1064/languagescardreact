import { Col, Container, Row } from "react-bootstrap";
import Language from "./Language";
import { data } from "../helper/data";

const Card = () => {
  return (
    <Container className="rounded-4 mt-4 p-4" style={{background:"#f48b29"}}>
      <h1 className="text-white my-2">Language</h1>
      <Row>
        {data.map((lang)=>{
          return(
      <Col sm={6} md={4} lg={3}>
      <Language {...lang}/>
     </Col>
          )
        })}
   
      </Row>
      
    </Container>
  )
}

export default Card
