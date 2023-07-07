import "./SleepOverview.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SleepOverview() {
  return (
    <div className="sleep-overview">
      <div className="header">
        <h3>Sleep Overview</h3>
      </div>

      <div className="record-sleep">
        <Link to="create"><span>Record Sleep</span></Link>
      </div>
    </div>
  );
}

