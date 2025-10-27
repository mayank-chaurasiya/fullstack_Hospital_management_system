import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <img src="media/images/404-pages.jpg" alt="Error image" />
        <Link to="/">
          <button
            className="btn btn-primary p-2 mt-2 fs-6"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Go to Home page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
