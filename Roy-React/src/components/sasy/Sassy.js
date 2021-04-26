import "../../sass/style.scss";

const Sassy = () => {
  return (
    <div>
      <h1>Sassy in React</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
        porro.
      </p>

      <div className="button-container">
        <button className="button button-container--small">Small</button>
        <button className="button button-container--large">Large</button>
      </div>
    </div>
  );
};
export default Sassy;
