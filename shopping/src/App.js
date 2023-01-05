import { Button, Navbar,Container, Nav } from 'react-bootstrap';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';



function App() {

  let [shoes, Setshoes] = useState(data);
  
  return (
    <div className="App">
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Jun Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
    
      <div className="container">
   <div className="row">
    
    {/* <Card shoes = {shoes[0]} i= {1}> </Card> 
    <Card shoes = {shoes[1]} i= {2}> </Card>
    <Card shoes = {shoes[2]} i= {3}> </Card> */}
   
   {
    shoes.map((a, i)=>{
      return(
      <Card shoes = {shoes[i]} i= {i}> </Card>)
    }
   )}
  </div>
</div> 
    </div>
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
    <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'}  width="70%"/>
    <h4> {props.shoes.title} </h4>
    <p> {props.shoes.content} </p>
    <p> {props.shoes.price} </p>
    </div>
  )
  
}




export default App;

