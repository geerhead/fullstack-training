import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  return (
    <div className={"app-container"}>
      <Counter type={"Step"} />
      <Counter type={"Count"} />
      <DisplayDate />
    </div>
  );

  function minusType(type) {
    if (type.toLowerCase() === "step") {
      if (step <= 1) return;
      setStep((s) => s - 1);
    } else {
      setCount((s) => s - 1);
    }
  }

  function addType(type) {
    type.toLowerCase() === "step"
      ? setStep((s) => s + 1)
      : setCount((s) => s + 1);
  }

  function Counter({ type }) {
    return (
      <div className={"counter-container"}>
        <button
          onClick={() => {
            minusType(type);
          }}
        >
          -
        </button>
        <div>
          {type}: {type.toLowerCase() === "count" ? count : step}
        </div>
        <button
          onClick={() => {
            addType(type);
          }}
        >
          +
        </button>
      </div>
    );
  }

  function DisplayDate() {
    const date = new Date();
    const totalDays = count * step;
    date.setDate(date.getDate() + totalDays);
    if (count === 0) {
      return (
        <div className={"date-container"}>Today is {date.toDateString()}</div>
      );
    } else {
      return (
        <div className={"date-container"}>
          {count > 0 ? totalDays : Math.abs(totalDays)}{" "}
          {Math.abs(totalDays) > 1 ? "days" : "day"} {count < 0 ? "ago" : ""}{" "}
          from today is {date.toDateString()}
        </div>
      );
    }
  }
}
