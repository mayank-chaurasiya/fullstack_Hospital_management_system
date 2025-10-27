import { Link } from "react-router-dom";
function Stats() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="mb-5 fs-3">Trust the confidence</h1>

          <div>
            <h2 className="fs-5">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+
              lakh crores worth of equity investments.
            </p>
          </div>
          <div>
            <h2 className="fs-5">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div>
            <h2 className="fs-5">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h2 className="fs-5">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money
            </p>
          </div>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt=""
            style={{ width: "85%" }}
          />
          <div className="text-center mt-3">
            <Link
              to=""
              className="mx-3 link-offset-2 link-underline link-underline-opacity-0"
            >
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link
              to=""
              className="mx-5 link-offset-2 link-underline link-underline-opacity-0"
            >
              Try Kite demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
