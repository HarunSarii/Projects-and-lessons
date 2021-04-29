const KeyboardEvents = () => {
  //keyDown

  const handleKeyDown = (e) => {
    console.log("keydown: ", e.target.value);
    console.log("keycode:", e.keyCode);
  };

  //keyUp
  const handleKeyUp = (e) => {
    console.log("keyup: ", e.type);
  };

  //cut event

  const handleCut = (e) => console.log("event type: ", e.type);

  //paste event

  const handlePaste = (e) => console.log("event type: ", e.type);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>KeyboardEvents</h2>
      <input
        onCut={handleCut}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        // onKeyUp={handleKeyUp}
        type="text"
        // defaultValue="enter someting"
      />
      <p onCut={handleCut} onPaste={handlePaste}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit aut
        dolore ab enim architecto distinctio veritatis ratione id vel!
      </p>
    </div>
  );
};

export default KeyboardEvents;
