import { useState } from "react";

export default function AccordionItem({ num, text, title }) {
  const [selected, setSelected] = useState(false);

  function toggleSelect() {
    setSelected(!selected);
  }

  return (
    <div className={selected ? "open item" : "item"} onClick={toggleSelect}>
      <p className="number">{num + 1}</p>
      <p className="title">{title}</p>
      <p>{selected ? "-" : "+"}</p>
      <div
        className="content-box"
        style={selected ? { display: "flex" } : { display: "none" }}
      >
        <ul>{text}</ul>
      </div>
    </div>
  );
}
