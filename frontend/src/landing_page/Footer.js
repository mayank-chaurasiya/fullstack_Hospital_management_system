import React from "react";

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
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-3 footer-link">
            <p>Company</p>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Pricing</a>
            <a href="">Referral programme</a>
            <a href="">Careers</a>
            <a href="">Zerodha.tech</a>
            <a href="">Press & media</a>
            <a href="">Zerodha Cares (CSR)</a>
          </div>
          <div className="col-3 footer-link">
            <p>Support</p>
            <a href="">Support portal</a>
            <a href="">Z-Connect blog</a>
            <a href="">List of charges</a>
            <a href="">Downloads & resources</a>
          </div>
          <div className="col-3 footer-link">
            <p>Account</p>
            <a href="">Open an account</a>
            <a href="">Fund transfer</a>
            <a href="">60 day challenge</a>
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
            <a href="">NSE</a>
            <a href="">BSE</a>
            <a href="">MCX</a>
            <a href="">Terms & conditions</a>
            <a href="">Policies & prodedures</a>
            <a href="">Privacy policy</a>
            <a href="">Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
