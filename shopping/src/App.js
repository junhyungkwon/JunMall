import { Button, Navbar,Container, Nav } from 'react-bootstrap';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';



function App() {

  let [shop, Setshop] = useState(data);
  
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
    
    <Card shop = {shop[0]} i= {1}> </Card>
    <Card shop = {shop[1]} i= {2}> </Card>
    <Card shop = {shop[2]} i= {3}> </Card>
   
  </div>
</div> 
    </div>
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
    <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'}  width="70%"/>
    <h4> {props.shop.title} </h4>
    <p> {props.shop.content} </p>
    <p> {props.shop.price} </p>
    </div>
  )
  
}




export default App;

