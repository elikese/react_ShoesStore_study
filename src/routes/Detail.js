import { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";


function Detail(props) {

  
  const [tabStatus, setTabStatus] = useState("상품상세");
  const {id} = useParams();
  const imgId = parseInt(id)+1;
  const handleTabClick = (e) => {
    setTabStatus(e.target.text);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + imgId + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      <Nav variant="tabs"  defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={handleTabClick} eventKey="link0">상품상세</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={handleTabClick} eventKey="link1">포토리뷰</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={handleTabClick} eventKey="link2">리뷰</Nav.Link>
      </Nav.Item>
      </Nav>
      {
      tabStatus === "상품상세" 
        ? <div>신발임</div>
        : tabStatus === "포토리뷰"
        ? <div>없음</div>
        : <div>없음</div> 
      }
    </div>
  );
}

export {Detail}