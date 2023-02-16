import './App.css';
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Card from "./components/Card";



function App() {
   
  
  return (
<Container className='text-center mt-4 p-4'> 

  <Header/>
  <Card/>
  

</Container>


  );
}

export default App;
