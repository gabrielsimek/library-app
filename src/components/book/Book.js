import Author from '../author/Author';
import './Book.css';
import { Link } from 'react-router-dom';
function Book({
  book: { title, total_pages: totalPages, book_id: id, rating, isbn, published_date: publishedDate, authors },
  showDetail = false,
}) {
  return (
    <article className="book">
      <Link to={`/books/${id}`}><h3>{title}</h3></Link>
      <address>
        {authors.map((author) => (
          <Author key={author.author_id} author={author} />
        ))}
      </address>
      {showDetail && (
        <>
          <p>Rating: {rating}</p>
          <p>ISBN: {isbn}</p>
          <p>Published {publishedDate}</p>
          <p>{totalPages} pages</p>
        </>
      )}
    </article>
  );
}

export default Book;
