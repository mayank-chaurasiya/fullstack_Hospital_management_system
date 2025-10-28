import "./Pricing.css";
function PricingComponent({ imageUrl, heading, description }) {
  return (
    <div className="price-container">
      <img src={imageUrl} />
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PricingComponent;
