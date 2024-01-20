import { useState } from "react";

export default function AccordionItem({
  num,
  text,
  title,
  curOpen,
  onOpen,
  children,
}) {
  // const [selected, setSelected] = useState(false);
  const isOpen = num === curOpen;

  function toggleSelect() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={isOpen ? "open item" : "item"} onClick={toggleSelect}>
      <p className="number">{num + 1}</p>
      <p className="title">{title}</p>
      <p>{isOpen ? "-" : "+"}</p>
      <div
        className="content-box"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <ul>{children}</ul>
      </div>
    </div>
  );
}
