import { Link } from "react-router-dom";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  linkName,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-4 mb-3 mt-5" style={{}}>
            {productName}
          </h1>
          <p className="mt-1 mb-3">{productDescription}</p>
          <div className="product1-links">
            <Link
              to={learnMore}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              {linkName}&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}
export default RightSection;
