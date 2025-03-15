import { FaArrowLeft, FaTrash, FaInfoCircle } from "react-icons/fa";
import "./Features.css";

function Features() {
  return (
    <div className="features">
      <div className="feature-buttons">
        <button className="feature-btn back">
          <FaArrowLeft />
        </button>
        <button className="feature-btn delete">
          <FaTrash />
        </button>
        <button className="feature-btn info">
          <FaInfoCircle />
        </button>
      </div>
    </div>
  );
}

export default Features;
