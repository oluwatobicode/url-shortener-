import Shortner from "../Shortner/Shortner";
import "./statics.css";

export default function Statics() {
  return (
    <div className="statics">
      <Shortner />

      <div className="statics-intro">
        <h1> Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our
          <span>advanced statistics dashboard.</span>
        </p>
      </div>

      <div className="stats">
        <div className="line"></div>
        <div className="stat-1">
          <div className="icon">
            <img src="images/icon-brand-recognition.svg" alt="brand" />
          </div>
          <h3> Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="stat-2">
          <div className="icon">
            <img
              src="images/icon-detailed-records.svg"
              alt="detailed-records"
            />
          </div>
          <h3> Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="stat-3">
          <div className="icon">
            <img
              src="images/icon-fully-customizable.svg"
              alt="fully-customizable"
            />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
