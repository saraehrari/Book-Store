
import { Link, useParams } from "react-router-dom";
import Books from "./Book";

export default function BookDetails() {
  const { id } = useParams();

  const book = Books.find((p) => p.id === Number(id));

  if (!book) {
    return <h2>Book Not Found!</h2>;
  }

  return (
    <div className="container py-5">
      <Link to="/books" className="btn btn-outline-dark mb-4">
        ← Back
      </Link>

      <div className="row">
        <div className="col-md-4">
          <img
            src={book.image}
            alt={book.title}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-8">
          <h2>{book.title}</h2>

          <p>
            <strong>Author:</strong> {book.author}
          </p>

          <p>
            <strong>Category:</strong> {book.category}
          </p>

          <h4>${book.price}</h4>

          <p>{book.description}</p>

          <button className="btn btn-dark">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}


