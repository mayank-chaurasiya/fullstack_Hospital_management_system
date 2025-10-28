import TicketTopics from "./TicketTopics";
import { Link } from "react-router-dom";
function CreateTicket() {
  const accordionId = "accordionExample";

  return (
    <div className="container">
      <div className="row mb-5 p-3">
        <div className="col-8 mt-4">
          <div className="accordion" id={accordionId}>
            <TicketTopics
              id_name2="collapseone"
              parentId={accordionId}
              logos={<i class="fa fa-plus-square" aria-hidden="true"></i>}
              TicketHeading="Account Opening"
              link1="Resident individual"
              link2="Minor"
              link3="Non Resident Indian (NRI)"
              link4="Company, Partnership, HUF and LLP"
              link5="Glossary"
            />
            <TicketTopics
              id_name2="collapsetwo"
              parentId={accordionId}
              logos={<i class="fa fa-user" aria-hidden="true"></i>}
              TicketHeading="Your Zerodha Account"
              link1="Your Profile"
              link2="Account modification"
              link3="Client Master Report (CMR) and Depository Participant (DP)"
              link4="Nomination"
              link5="Transfer and conversion of securities"
            />
            <TicketTopics
              id_name2="collapsethree"
              parentId={accordionId}
              logos={<i class="fa fa-paper-plane-o" aria-hidden="true"></i>}
              TicketHeading="Kite"
              link1="IPO"
              link2="Trading FAQs"
              link3="Margin Trading Facility (MTF) and Margins"
              link4="Charts and Orders"
              link5="General Alerts and Nudges"
            />
            <TicketTopics
              id_name2="collapsefour"
              parentId={accordionId}
              logos={<i class="fa fa-inr" aria-hidden="true"></i>}
              TicketHeading="Funds"
              link1="Resident individual"
              link2="Minor"
              link3="Non Resident Indian (NRI)"
              link4="Company, Partnership, HUF and LLP"
              link5="Glossary"
            />
            <TicketTopics
              id_name2="collapsefive"
              parentId={accordionId}
              logos={<i class="fa fa-cog" aria-hidden="true"></i>}
              TicketHeading="Console"
              link1="Resident individual"
              link2="Minor"
              link3="Non Resident Indian (NRI)"
              link4="Company, Partnership, HUF and LLP"
              link5="Glossary"
            />
          </div>
        </div>
        <div className="col-4 p-3">
          <div className="p-2">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <ul>
                  <Link
                    to="#"
                    className="link-offset-2 link-underline link-underline-opacity-0"
                  >
                    <li className="mb-3">
                      Delay in commodity (MCX) market open [Resolved]
                    </li>
                  </Link>
                  <Link
                    to="#"
                    className="link-offset-2 link-underline link-underline-opacity-0"
                  >
                    <li className="mb-3">
                      Surveillance measure on scrips - October 2025
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div class="quick-links p-2">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-header">Quick links</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="link-offset-2 link-underline link-underline-opacity-0"
                  >
                    1. Track account opening
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="link-offset-2 link-underline link-underline-opacity-0"
                  >
                    2. Track segment activation
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="link-offset-2 link-underline link-underline-opacity-0"
                  >
                    3. Intraday margins
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="link-offset-2 link-underline link-underline-opacity-0"
                  >
                    4. Kite user manual
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="link-offset-2 link-underline link-underline-opacity-0"
                  >
                    5. Learn how to create a ticket
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
