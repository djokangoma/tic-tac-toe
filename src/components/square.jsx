import { useState } from "react";
export default function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }
  return (
    <div className="square">
      <button className="buttonSquare" onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}
