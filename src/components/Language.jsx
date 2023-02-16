import { useState } from "react"
import { Container, Image } from "react-bootstrap"


const Language = ({name,img,options}) => {
  const [showImage, setShowImage] = useState(true)

  return (
   <Container
   className="p-4 rounded-2 h-100"
   style={{background:"peachpuff"}}
   onClick={()=>setShowImage(!showImage)}
   type="button"
   >
    {showImage && (
       <Container>
       <Image src={img} width="70%" className="lang-logo"></Image>
       <h3 className="display-6">{name}</h3>
      </Container>
    )}

    {!showImage && (
        <ol className="h-100 d-flex flex-column justify-content-center">
        {options.map((item)=>{
          return(
            <li className="h5 text-start">{item}</li>
          )
        })}
       </ol>
    )}
  
 
   </Container>
  )
}

export default Language
