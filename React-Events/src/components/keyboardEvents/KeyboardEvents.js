const KeyboardEvents = () => {
  //keyDown

  const handleKeyDown = (e) => {
    console.log("keydown: ", e.target.value);
  };

  const handleKeyUp = (e) => {
    console.log("keyup: ", e.type);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>KeyboardEvents</h2>
      <input
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        type="text"
        defaultValue="enter someting"
      />
    </div>
  );
};

export default KeyboardEvents;
