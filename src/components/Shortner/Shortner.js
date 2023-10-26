import { useEffect, useState } from "react";
import "./shortner.css";

export default function Shortner({ addToList, Oldlink }) {
  const [Link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  useEffect(function () {
    const controller = new AbortController();
    const shortnedUrl = async () => {
      try {
        const res = await fetch(
          "https://api-ssl.bitly.com/v4/shorten",
          {
            method: "POST",
            headers: {
              Authorization: "8d93dccb3f3acb5c724665de714df52bcf1989cb",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              long_url: Link,
              domain: "bit.ly",
            }),
          },
          { signal: controller.signal }
        );
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
    shortnedUrl();

    return function () {
      controller.abort();
    };
  });

  function ShortenedLink(e) {
    e.preventDefault();
    if (!Link) return;
    console.log(userLink);
    addToList(userLink);
  }

  const userLink = { Link, shortLink, id: Date.now() };

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

      {Oldlink.length > 0 && (
        <div className="shortned-link">
          <h3>{Link}</h3>
          <div className="result">
            <p>
              <a href={shortLink}>{shortLink}</a>
            </p>
            <button className="copy">Copy</button>
          </div>
        </div>
      )}
    </div>
  );
}
