import { useEffect, useState } from "react";
import "./shortner.css";

export default function Shortner() {
  const [Link, setLink] = useState("");

  const userLink = { Link, id: Date.now() };

  function ShortenedLink(e) {
    e.preventDefault();
    if (!Link) return;
    console.log(userLink);
  }

  return (
    <div className="shorter">
      <div className="shortener">
        <form className="form" onSubmit={ShortenedLink}>
          <div className="input">
            <input
              type="text"
              className="inputed-text"
              placeholder="Shorten a link here...."
              value={Link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <button className="shorten-it" onClick={ShortenedLink}>
            Shorten it !
          </button>
        </form>
      </div>

      {Link && (
        <div className="shortned-link">
          <h3>{Link}</h3>
          <div className="result">
            <p>
              <a href="#">https://rel.ink/k4lKyk</a>
            </p>
            <button className="copy">Copy</button>
          </div>
        </div>
      )}
    </div>
  );
}
