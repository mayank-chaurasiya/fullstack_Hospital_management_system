import "./Pricing.css";
function Brokerage() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="fs-4 mb-5">Charges Explained</h1>
      </div>
      <div className="row mx-5 p-5">
        <div className="col-6">
          <h6 className="text-muted h-text-size">
            Securities/Commodities transaction tax
          </h6>
          <p className="p-text-size">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="p-text-size">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h6 className="text-muted h-text-size">
            Transaction/Turnover Charges
          </h6>
          <p className="p-text-size">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="p-text-size">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="p-text-size">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="p-text-size">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="p-text-size">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
        </div>
        <div className="col-6">
          <h6 className="text-muted h-text-size">GST</h6>
          <p className="p-text-size">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h6 className="text-muted h-text-size">SEBI Charges</h6>
          <p className="p-text-size">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h6 className="text-muted h-text-size">
            DP (Depository participant) charges
          </h6>
          <p className="p-text-size">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="p-text-size">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="p-text-size">
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h6 className="text-muted h-text-size">Pledging charges</h6>
          <p className="p-text-size">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
        </div>
        <div className="row">
          <h6 className="text-muted h-text-size">Disclaimer</h6>
          <p className="p-text-size">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
