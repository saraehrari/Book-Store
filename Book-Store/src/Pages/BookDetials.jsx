
import { Link, useParams } from "react-router-dom";
import Book from "./Data/Book";

export default function BookDetails() {
  const { id } = useParams();

  const Book = Book.find((p) => p.id === Number(id));

  if (!Book) {
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
            src={Book.image}
            alt={Book.title}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-8">
          <h2>{Book.title}</h2>

          <p>
            <strong>Author:</strong> {Book.author}
          </p>

          <p>
            <strong>Category:</strong> {Book.category}
          </p>

          <h4>${Book.price}</h4>

          <p>{Book.description}</p>

          <button className="btn btn-dark">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}


