import PricingComponent from "./PricingComponent";
import "./Pricing.css";
function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom text-center mb-5 mt-5">
        <h1 className="p-4 fs-2">Pricing</h1>
        <p className="mb-5 text-muted">
          Free equity investments and flat &#8377;20 traday and F&O trades.
        </p>
      </div>
      <div className="hero-container mt-5 mb-5 p-5">
        <PricingComponent
          imageUrl="media/images/pricing0.svg"
          heading="Free equity delivery"
          description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
        />
        <PricingComponent
          imageUrl="media/images/intradayTrades.svg"
          heading="Intraday and F&O Trades"
          description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
        />
        <PricingComponent
          imageUrl="media/images/pricing0.svg"
          heading="Free direct MF"
          description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
        />
      </div>
    </div>
  );
}

export default Hero;
