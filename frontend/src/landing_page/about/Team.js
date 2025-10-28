import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container border-top">
      <div className="row mt-3 mb-4">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row pt-5 pb-5">
        <div className="col-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath Image"
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6" style={{lineHeight: "2.1"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link
              to=""
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              Homepage
            </Link>
            /{" "}
            <Link
              to=""
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              TradingQnA
            </Link>{" "}
            /{" "}
            <Link
              to=""
              className="link-offset-2 link-underline link-underline-opacity-0"
            >
              Twitter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
