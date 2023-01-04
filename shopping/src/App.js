import { Button, Navbar,Container, Nav } from 'react-bootstrap';
import './App.css';
import good from './img/good.jpg'



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

      <div className='main-bg'  style={{backgroundimage : 'url('+good+')'}}></div>
    </div>
    
  );
}

export default App;
