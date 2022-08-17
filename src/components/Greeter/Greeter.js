import React, { useState } from "react";
import Button1 from "../Button1/Button1";
import "./Greeter.css";

const Greeter = () => {
  const [name, setName] = useState({ value: "", wasCleared: false });
  const [showGreeting, setShowGreeting] = useState(false);

  const handleTextDisplay = () =>
    name.value !== "" && name.wasCleared === false
      ? setShowGreeting(!showGreeting)
      : name.value === "" && name.wasCleared === true && showGreeting
      ? (setShowGreeting(!showGreeting), (name.wasCleared = false))
      : null;

  return (
    <>
      <div className="  text-center ">
        <div className="d-flex justify-content-md-center mt-3">
          <input
            className="input1"
            placeholder="What's your name?"
            onKeyUp={(e) => {
              setName({
                value: e.target.value,
                wasCleared: e.target.value === "" && e.key === "Backspace",
              });
            }}
          />
        </div>
        <div className="mt-5 ">
          <Button1
          
            color={
              showGreeting ? (name.value.length > 0 ? `red` : `green`) : `blue`
            }
            text={showGreeting ? `Hide` : `Show`}
            parentCallback={handleTextDisplay}
          />

          <label className="ps-3">
            {showGreeting ? `Hi  ${name.value}` : ``}
          </label>
        </div>
      </div>
    </>
  );
};

export default Greeter;
