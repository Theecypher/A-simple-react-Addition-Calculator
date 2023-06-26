import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    const num = document.querySelector("#num").value;
    if (num == "") return;
    const currentNum = currentSum + parseInt(num);
    setCurrentSum(currentNum);
    document.querySelector("#num").value = "";
  };

  const Clear = (e) => {
    e.preventDefault();
    document.querySelector("form").reset();
    setClear(true);
    setCurrentSum(0);
  };
  return (
    <div>
      <form>
        <input id="result" readOnly value={currentSum} />
        <input id="num" placeholder="please enter a number" />
        <button onClick={Add}>Add</button>
        <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}
