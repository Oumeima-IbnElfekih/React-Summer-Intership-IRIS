
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './components/Books'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Bookdetails from './components/BookDetails';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';

function App() {
  

  return (
    <>
    <Header/>
    
    <Routes>
    <Route path="/home"  element={<Home/>} />
    <Route path="/books" element={<Books/>}/>
    <Route path="/add" element={<AddBook/>}/>
    <Route path="/details/:id" element={<Bookdetails />} />
    <Route path="/update/:id" element={<UpdateBook />} />
  </Routes>
  
    </>
  )
}

export default App
