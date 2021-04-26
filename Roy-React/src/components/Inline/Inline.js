import { myStyles } from "./styles";

const stylesObj = {
  color: "red",
  backgroundColor: "#e0e0e0",
  fontWeight: "lighter",
};

const Inline = () => {
  return (
    <div>
      <h1
        style={{
          color: "purple",
          backgroundColor: "#e0e0e0",
          fontWeight: "lighter",
        }}
      >
        Hello From Inline comp
      </h1>
      <h2 style={stylesObj}>
        Inline components with constant javascript object
      </h2>
      <div style={myStyles.div}>
        <p style={myStyles.par}>Inline styling with third option</p>
      </div>
    </div>
  );
};

export default Inline;
