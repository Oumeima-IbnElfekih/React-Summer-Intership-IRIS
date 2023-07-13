import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { addBook } from '../service/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [titre, setTitre] = useState('');
  const [image ,setImage] = useState('');
  const [author, setAuthor] = useState();
  const [date_publication, setDatePub] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const formData = new FormData();
    formData.append('titre', titre);
    formData.append('auteur', author);
    formData.append('description', description);
     formData.append('image', image);
    formData.append('date_publication', date_publication);
        await addBook(formData)
        navigate('/books');
      } catch (error) {
        // Handle error
        console.error('Error adding book:', error);
        throw error;
      }
   
  };

  return (
    <Container fluid="md">
    <Form onSubmit={handleSubmit} >
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>Publish date</Form.Label>
        <Form.Control type="text" value={date_publication} onChange={(e) => setDatePub(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" accept="image/*"  onChange={(e) => setImage(e.target.files[0])} />
      </Form.Group>
      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="number" onChange={(e) => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Book
      </Button>
    </Form>
    </Container>
  );
};

export default AddBook;
