import axios from 'axios';
const url = "http://127.0.0.1:8000/api";
export const getBooks = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
export const addBook = async (book) => {
    console.log(book);  
    return await axios.post(url+"/add/",book,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
}
export const editBook = async (id, book) => {
    console.log(`${url}/update/${id}`);
    return await axios.put(`${url}/update/${id}`,book,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
}
export const deleleBook = async (id) => {
    return await axios.delete(`${url}/delete/${id}`);
}