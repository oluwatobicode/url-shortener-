import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1> More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed{" "}
          <span>insights on how your links are performing.</span>
        </p>
        <button className="get-started">
          <p>Get Started</p>
        </button>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}
