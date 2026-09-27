import { Link } from "react-router-dom";
import Books from "../Data/Book";

export default function BooksPage() {
  return (
    <div className="books-page">
      <div className="container py-5">

        {/* Header */}
        <div className="books-header">
          <span className="section-label">
            OUR COLLECTION
          </span>

          <h1 style={{color:"#111"}}>
            Discover Your Next Book
          </h1>

          <p className="books-subtitle">
            Explore our collection of books and find your next
            favorite story, idea, or source of inspiration.
          </p>
        </div>

        {/* Books */}
        <div className="row g-4">

          {Books.map((book) => (
            <div className="col-md-6 col-lg-4" key={book.id}>

              <div className="book-card">

                </div>

                <div className="book-card-body">

                  <span className="book-category">
                    {book.category}
                  </span>

                  <h3 className="book-card-title">
                    {book.title}
                  </h3>

                  <p className="book-card-author">
                    By {book.author}
                  </p>

                  <p className="book-card-description">
                    {book.description}
                  </p>

                  <div className="book-card-footer">

                    <span className="book-price">
                      ${book.price}
                    </span>

                    <Link
                      to={`/bookdetails/${book.id}`}
                      className="btn btn-dark view-book-btn"
                    >
                      View Details
                    </Link>

                  </div>

                </div>
              </div>

            
          ))}

        </div>
      </div>
    </div>
  );
}