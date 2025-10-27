import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5 p-2">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/images/education.svg"
            alt="Education"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1 className="fs-4 mb-4">Free and open market education</h1>
          <div className="mb-4">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              Varsity&nbsp;&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in
              india for all market realted queries.
            </p>
            <a
              href="#"
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              TradingQ&A&nbsp;&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
