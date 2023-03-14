import { useState } from "react";

function Accardion({ title, text }) {
  const [show, setShow] = useState(false);
  return (
    <div className="section">
      <div className="accardion">
        <div className="header">
          <h2>{title}</h2>
          <button className="btn" onClick={() => setShow(!show)}>
            {show ? "-" : "+"}
          </button>
        </div>
        {show && <p className="desc">{text} </p>}
      </div>
    </div>
  );
}

export default Accardion;
