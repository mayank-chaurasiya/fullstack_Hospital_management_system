import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="border-top" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container mt-3 p-5 ">
        <div className="row ">
          <div className="col-3">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "50%" }}
            />
            <p className="mt-4" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <div className="footer-icons">
              <Link to="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="col-3 footer-link">
            <p>Company</p>
            <Link to="">About</Link>
            <Link to="">Products</Link>
            <Link to="">Pricing</Link>
            <Link to="">Referral programme</Link>
            <Link to="">Careers</Link>
            <Link to="">Zerodha.tech</Link>
            <Link to="">Press & media</Link>
            <Link to="">Zerodha Cares (CSR)</Link>
          </div>
          <div className="col-3 footer-link">
            <p>Support</p>
            <Link to="">Support portal</Link>
            <Link to="">Z-Connect blog</Link>
            <Link to="">List of charges</Link>
            <Link to="">Downloads & resources</Link>
          </div>
          <div className="col-3 footer-link">
            <p>Account</p>
            <Link to="">Open an account</Link>
            <Link to="">Fund transfer</Link>
            <Link to="">60 day challenge</Link>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div class="row mt-1 mb-1 p-1">
          <div className="footer-links">
            <Link to="">NSE</Link>
            <Link to="">BSE</Link>
            <Link to="">MCX</Link>
            <Link to="">Terms & conditions</Link>
            <Link to="">Policies & prodedures</Link>
            <Link to="">Privacy policy</Link>
            <Link to="">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
