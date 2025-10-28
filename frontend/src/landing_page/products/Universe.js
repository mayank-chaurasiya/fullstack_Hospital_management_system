function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p className="p-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5 mb-5">
          <img src="media/images/smallcaseLogo.png" className="img-size" />
          <p className="text-muted paragraph-text">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" className="img-size" />
          <p className="text-muted paragraph-text">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" className="img-size" />
          <p className="text-muted paragraph-text">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" className="img-size" />
          <p className="text-muted paragraph-text">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" className="img-size" />
          <p className="text-muted paragraph-text">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" className="img-size" />
          <p className="text-muted paragraph-text">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
