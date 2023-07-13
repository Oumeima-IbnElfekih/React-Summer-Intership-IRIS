import { useEffect, useState } from "react"
import Alert from 'react-bootstrap/Alert';
import { getBooks ,deleleBook} from "../service/api"
import Book from "./Book";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Books (){
    const [books,setBooks] =useState([])
    const [shouldRefetch, setShouldRefetch] = useState(false);
     const fetchBooks= () => async () => {
        console.log('test fetchBooks') 
        getBooks()
        .then((response)=>{ console.log(response.data) 
            setBooks(response.data)
         })
        
        .catch((error)=> console.log(error));
        
        };

    useEffect(()=>fetchBooks(),[shouldRefetch])
    const deleteB = async (id) => {
        
        const result = window.confirm("Are you sure you want to delete?");
        if (result) {
        await  deleleBook(id)
          .then( async ()=>{
           console.log('succcessfully deleted')
           setShouldRefetch(!shouldRefetch)
          })
          .catch((error)=>{
            console.log('error deleting', error)
          })
        }
      };
   
   
   
   return   (<> 
   <Container fluid="md">
   <Row>
   {books.length != 0 ? books.map(e=> { return    <Book key={e.id} Book={e} delete={deleteB} /> } ) : <Col><Alert variant="danger"> No books found</Alert> </Col> }
   </Row>
    </Container>
   
  
   </>)
}