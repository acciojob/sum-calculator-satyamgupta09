import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum, setSum] = useState(0);

  function handleSum(e) {
    const value = parseInt(e.target.value);
    setSum((prevSum) => prevSum + value);
  }

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" id="input" onChange={handleSum} />
      <p id="sum">Sum: {sum}</p>
    </div>
  );
};

export default App;
