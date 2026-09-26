import books from "../data/books";
import { Link } from "react-router-dom";

function Books() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">All Books</h2>

      <div className="row">
        {books.map((book) => (
          <div className="col-md-3 mb-4" key={book.id}>
            <div className="card h-100">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>${book.price}</p>

                <Link
                  to={`/books/${book.id}`}
                  className="btn btn-dark w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;