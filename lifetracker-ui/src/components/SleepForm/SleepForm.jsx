import { Link } from "react-router-dom";
import "./SleepForm.css";

export default function SleepForm() {
  return (
    <div className="sleep-page">
      <div className="header">
        <div className="chakra-stack css-1cgbrw5">
          <h2 className="chakra-heading css-b5coes">Sleep</h2>
        </div>
      </div>
      <div className="content">
        <div className="empty-sleep">
          <h2 className="chakra-heading css-hzsul0">Nothing here yet.</h2>
          <span className="chakra-link button css-spn4bz">
            <Link to="create">
              <button type="button" className="add-sleep-bttn">
                Add Sleep
              </button>
            </Link>
          </span>
          <img
            src="https://lifetracker-ui-ai8e.onrender.com/assets/empty-bed-b93e7358.jpg"
            className="chakra-image css-ni3ua3"
          />
        </div>
      </div>
    </div>
  );
}
