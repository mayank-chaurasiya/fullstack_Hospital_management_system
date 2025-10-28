import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center mt-5 p-2 border-bottom">
        <h1 className=" mb-3 fs-3">Zerodha Products</h1>
        <h3 className="fs-5 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-1">
          Check out our&nbsp;
          <Link
            to=""
            className="link-offset-2 link-underline link-underline-opacity-0"
          >
            investment offerings&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
