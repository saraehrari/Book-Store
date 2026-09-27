import { Link, useParams } from "react-router-dom";
import books from "../Data/Book";

export default function BookDetails() {
  const { id } = useParams();

  const book = books.find((p) => p.id === Number(id));

  if (!book) {
    return <h2>Book Not Found!</h2>;
  }

  return (
    <div className="container py-5">
      <Link to="/books">
        ← Back
      </Link>

        <div className="col-md-8">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <h4>${book.price}</h4>
          <p>{book.description}</p>

          <button className="btn btn-dark">
            Add to Cart
          </button>
        </div>
      </div>
    
  );
}