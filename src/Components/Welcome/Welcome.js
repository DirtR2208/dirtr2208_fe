import "./Welcome.css";
import welcome from "../../images/mainpic.png";

export function Welcome() {
  return (
    <div className="welcome-main">
      <img src={welcome} />
      <h1 className="welcome-message">FIND YOUR PERFECT OFFROAD TRAIL</h1>
      <button className="button-welcome">FIND YOUR TRAIL ▶︎</button>
    </div>
  );
}