function Hero() {
  return (
    <div style={{ backgroundColor: "#f4f3ee" }}>
      <div className="container">
        <div className="row mb-5">
          <div className="p-3 mx-4 mt-3 d-flex justify-content-between">
            <h1 className="fs-2">Support Portal</h1>
            <button
              className="btn btn-primary p-2 mx-5"
              style={{ width: "180px" }}
            >
              My Tickets
            </button>
          </div>
          <div className="input-group input-group-lg p-5">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Eg: How do I opne my Account, How do i activate F&O..."
              style={{fontSize: "18px"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
