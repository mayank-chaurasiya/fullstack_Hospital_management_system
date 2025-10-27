import { Link } from "react-router-dom";
function Pricing() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-4 mx-5 p-2">
          <h1 className="mb-4 fs-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in india. Flat fees and no hidden chanrges.
          </p>
          <Link
            to=""
            className="link-offset-2 link-underline link-underline-opacity-0"
          >
            See Pricing&nbsp;&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
    
        <div className="col-6 mx-5 p-2">
          <div className="row text-center">
            <div className="col-6 border p-4">
              <h1 className="mb-4">&#8377;0</h1>
              <p>
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col-6 border p-4">
              <h1 className="mb-4">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
