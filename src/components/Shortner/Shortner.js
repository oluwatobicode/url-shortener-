import { useState } from "react";
import "./shortner.css";

export default function Shortner() {
  const [Link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  const shortnedUrl = async () => {
    try {
      const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: "e9a4736eb743ccfda6d825031338580a7f9b914c",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: Link,
          domain: "bit.ly",
        }),
      });
      const data = await res.json();
      setShortLink(data.id);
      console.log(data.id);
      console.log(shortLink);
    } catch (error) {
      console.log(error.message);
    }
    if (Link.length < 5) {
      setLink("");
      return;
    }
  };

  // setTimeout(shortnedUrl, 1000);

  function ShortenedLink(e) {
    e.preventDefault();
    if (!Link) return;
    shortnedUrl();
    console.log(userLink);
  }

  const userLink = { Link, shortLink, id: Date.now() };

  return (
    <div className="shorter">
      <div className="shortener">
        <form className="form" onSubmit={() => ShortenedLink}>
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

      <div className="all">
        <div className="shortned-link">
          <h3></h3>
          <div className="result">
            <p>
              <a href=""></a>
            </p>
            <button className="copy">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
