import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const type = props.data || "Click!!";

  return (
    <button onClick={increment}>
      {type} {count}
    </button>
  );
};

export default Counter;
