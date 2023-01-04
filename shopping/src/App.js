import { Button, Navbar,Container, Nav } from 'react-bootstrap';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
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
    <div className="col-md-4">
      <img src='https://user-images.githubusercontent.com/78072931/210526606-d26a9e11-c226-41c6-9b53-ee1f93d2a184.png'  width="60%"/>
      <h4> 상품명 </h4>
      <p> 상품 설명 </p>
    </div>
    <div className="col-md-4">
      <img src='https://user-images.githubusercontent.com/78072931/210526775-45912dc2-a771-4418-ba7d-00a712e503f8.png' width='59%'/>
      <h4> 상품명 </h4>
      <p> 상품 설명 </p>
    </div>
    <div className="col-md-4">
      <img src='https://user-images.githubusercontent.com/78072931/210526097-feeceb6f-b698-4b09-96f2-7ceca1657f1b.png' width='58%'/>
      <h4> 상품명 </h4>
      <p> 상품 설명 </p>
    </div>

  </div>
</div> 
    </div>
  );
}





export default App;

