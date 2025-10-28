import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  linkName,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-5 p-5 mt-5">
          <h1 className="fs-4 mb-3">{productName}</h1>
          <p className="mt-1 mb-3">{productDescription}</p>
          <div className="product1-links">
            <Link
              to={tryDemo}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              {linkName}&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link
              to={learnMore}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              Learn More&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="product2-links mt-4">
            <Link
              to={googlePlay}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <img src="media/images/googlePlayBadge.svg" />
            </Link>
            <Link
              to={appStore}
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <img src="media/images/appstoreBadge.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
