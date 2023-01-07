import { Button, Navbar,Container, Nav } from 'react-bootstrap';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Route2 from './data1.js'


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">

      
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Jun Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    

      <Routes>
        <Route path='/' element={
         <>
         <div className="main-bg"></div>
         <div className="container">
           <div className="row">
             { shoes.map((a, i)=>{
               return (<Card shoes={shoes[i]} i={i} ></Card>
              )})}
            </div>
          </div> 
        </>
        }/>

        <Route path='/detail' element={<About/>}>
        <Route path='about' element={<div> 이름</div>}></Route>
        <Route path='member' element={<div> 내용</div>}></Route>

        </Route>

      </Routes>
      
      
    </div>
  );
}

function About() {
  return(
    <div>
      <h4>회사 정보</h4>

    <Outlet></Outlet>
    </div>
  )
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

function Route1(props){
  return( 
    <>
   <div className="main-bg"></div>
   <div className="container">
     <div className="row">
       { props.shoes.map((a, i)=>{
         return (<Card shoes={props.shoes[i]} i={i} ></Card>
        )})}
      </div>
    </div> 
  </>

  )
}




export default App;

