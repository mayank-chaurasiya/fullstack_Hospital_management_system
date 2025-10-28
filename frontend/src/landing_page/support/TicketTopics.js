import { Link } from "react-router-dom";

function TicketTopics({
  id_name2,
  logos,
  TicketHeading,
  link1,
  link2,
  link3,
  link4,
  link5,
  parentId,
}) {
  // Render only the accordion-item. The parent accordion container must wrap multiple TicketTopics
  return (
    <div className="accordion-item p-2 mt-2">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id_name2}`}
          aria-expanded="false"
          aria-controls={id_name2}
        >
          <span style={{ height: "100%", width: "50px" }}>{logos}</span>
          {TicketHeading}
        </button>
      </h2>
      <div
        id={id_name2}
        className="accordion-collapse collapse"
        data-bs-parent={parentId ? `#${parentId}` : undefined}
      >
        <div className="accordion-body">
          <ul>
            <li className="mb-3">
              <Link
                to="#"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                {link1}
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="#"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                {link2}
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="#"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                {link3}
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="#"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                {link4}
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="#"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                {link5}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TicketTopics;
