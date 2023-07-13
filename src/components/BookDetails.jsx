import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { useParams } from 'react-router-dom';
import { getBooks } from "../service/api";
import { useEffect, useState } from "react";
export default function Bookdetails (){
   
    const [book,setBook] = useState({});   
    let { id } = useParams();
    const fetchBook= () => async () => {
       
        getBooks(id)
        .then((response)=>{ console.log(response.data) 
            setBook(response.data)
         })
        
        .catch((error)=> console.log(error));
        
        };

    useEffect(()=>fetchBook(),[])
   return (  <Container>
    <Row>
      <Col>
        <h3>{book.titre}</h3>
        <p>Description : {book.description}</p>
        <img  src={"http://127.0.0.1:8000/"+book.image} width="200px"/>
      </Col>
    </Row>
  </Container> ) 
}