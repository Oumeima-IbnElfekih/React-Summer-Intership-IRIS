import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
export default function Book (props){
   console.log(props.Book);
 
   
   
   
   return (  <Col> <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={"http://127.0.0.1:8000/"+props.Book.image} />
   <Card.Body>
     <Card.Title>{props.Book.titre}</Card.Title>
     <Card.Text>
       {props.Book.description}
     </Card.Text>
     <Button variant="info"> <Link to={"/details/"+props.Book.id}>View Details</Link></Button> <br></br> <br></br>
     <Button variant="dark"> <Link to={"/update/"+props.Book.id}>Update Informations</Link></Button>  <br></br> <br></br>
     <Button variant="danger" onClick={()=>props.delete(props.Book.id)}> Delete</Button>
   </Card.Body>
 </Card> </Col>  ) 
}