import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { Link } from "react-router-dom";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        linkName="Try Demo"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#"
        linkName="Learn More"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        linkName="Coin"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#"
        linkName="Kite Connect"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        linkName="Varsity Mobile"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      <p className="fs-5 text-center mt-5 mb-4 p-5">
        Want to know more about our technology stack? Check out the{" "}
        <Link to="#" className="link-offset-2 link-underline link-underline-opacity-0">Zerodha.tech</Link> blog.
      </p>
      <Universe />
    </>
  );
}
export default ProductPage;
