import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <section className="text-center mb-5">
        <h1>Discover Your Next Favorite Book</h1>
        <p className="text-muted">
          Explore hundreds of books across different categories.
        </p>
        <Link to="/books" className="btn btn-dark">
          Explore Books
        </Link>
      </section>
    </div>
  );
}

export default Home;