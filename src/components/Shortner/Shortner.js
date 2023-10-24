import "./shortner.css";

export default function Shortner() {
  return (
    <div className="shortener">
      <form className="form">
        <div className="input">
          <input
            type="text"
            className="inputed-text"
            placeholder="Shorten a link here...."
          />
        </div>
        <button className="shorten-it">Shorten it !</button>
      </form>
    </div>
  );
}
