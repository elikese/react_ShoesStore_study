import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg from './bg.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import products from './product.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Detail } from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js';
function App() {

  let [shoes, setShoes] = useState(products);
  const [clickCount, setClickCount] = useState(0);
  let navigate = useNavigate();
    
  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoesStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Main</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/0')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
        <>
        <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
        <Container>
          <Row>
            {shoes.map((shoes, i) => {
              return (
                <ProductCard shoes = {shoes} i={i+1}/>
              );
            })}
          </Row>
          { clickCount === 0
            ? <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((res)=>{
                let copy = [...shoes, ...res.data];
                setShoes(copy);
                setClickCount(clickCount + 1);
              }).catch((error)=>{console.log(error)});
            }}>더보기</button>
            : clickCount === 1
            ? <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data3.json').then((res)=>{
                let copy = [...shoes, ...res.data];
                setShoes(copy);
                setClickCount(clickCount + 1);
              }).catch((error)=>{console.log(error)});
            }}>더보기</button>
            :<></> 
          }
        </Container>
        </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes = {shoes}/>}/>
        <Route path='/about' element={<About/>}> 
          <Route path='member' element={<div>멤버</div>}/>
          <Route path='location' element={<div>위치</div>}/>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path='/*' element={<h1>없는 페이지요</h1>}/>
        <Route path='/cart' element={<div><Cart/></div>}/>
      </Routes>
      
    </div>
  );
}

function Event() {
  return (
    <div>
    <h1>오늘의 이벤트</h1>
    <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      회사정보임
      <Outlet></Outlet>
    </div>
  )
}


function ProductCard (props) {
  return (
  <Col sm>
    <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%"></img>    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
  </Col>
);
}

export default App;