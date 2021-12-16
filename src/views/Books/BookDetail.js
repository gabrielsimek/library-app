import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';

function BookDetail({ match: { params: { id } } }) {
  // const id = 1; // TODO: Use id from route
  const [book, setBook] = useState(null);
  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <>
      <Link to='/books'>Back to list</Link>
      <Book book={book} showDetail />
    </>
  );
}

export default BookDetail;
