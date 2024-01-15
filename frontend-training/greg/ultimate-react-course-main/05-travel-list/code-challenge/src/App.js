import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  return (
    <div className={"app-container"}>
      <Step />
      <Counter type={"Count"} />
      <DisplayDate />
      <ResetButton />
    </div>
  );

  function minusCount() {
    setCount((s) => s - 1);
  }

  function addCount() {
    setCount((s) => s + 1);
  }

  function Step() {
    return (
      <div className="counter-container">
        <input
          type={"range"}
          min={0}
          max={10}
          defaultValue={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        {step}
      </div>
    );
  }

  function Counter() {
    return (
      <div className={"counter-container"}>
        <button
          onClick={() => {
            minusCount();
          }}
        >
          -
        </button>
        <input type="text" value={count} readOnly />
        <button
          onClick={() => {
            addCount();
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

  function ResetButton() {
    return step !== 1 || count !== 1 ? (
      <div>
        <button
          onClick={() => {
            setStep(1);
            setCount(1);
          }}
        >
          Reset
        </button>
      </div>
    ) : (
      ""
    );
  }
}
