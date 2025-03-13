import "./Why.css";
import WhyImg from "../../assets/Why.jpg";


export default function Why() {
  return (
    <>
      <div id="Grid">
        <div id="Text">
          <h1>Why ?</h1>
          <ul>
            <li>
              Food redistribution helps reduce food waste and combat hunger by
              distributing surplus food to those in need.
            </li>
            <li>
              Millions suffer from hunger despite sufficient global food
              production, while large amounts of food go to waste.
            </li>
            <li>
              By redirecting excess food, it promotes sustainability and a more
              equitable food system.
            </li>
          </ul>
          <h1>Impact !</h1>
          <ul>
            <li>
              Reduces food waste and minimizes environmental harm.
              </li>
              <li>Supports nutrition and well-being in underprivileged communities.
              Saves businesses money and creates job opportunities in food
              recovery.
            </li>
          </ul>
        </div>
        <div id="Image">
          <img src={WhyImg}></img>
        </div>
      </div>
    </>
  );
}
