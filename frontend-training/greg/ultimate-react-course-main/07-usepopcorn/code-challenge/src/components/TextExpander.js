import { useState } from "react";

export default function TextExpander({
  buttonColor,
  children,
  collapsedNumWords = children.length,
  collapseButtonText = "Collapse text",
  expandButtonText = "Show text",
  expanded = false,
}) {
  const [isCollapsed, setIsCollapsed] = useState(
    expanded ? !expanded : collapsedNumWords < children.length
  );

  return (
    <>
      <div className="box">
        {isCollapsed ? children.slice(0, -collapsedNumWords) + "..." : children}
        {collapsedNumWords === children.length ? (
          ""
        ) : (
          <Button
            isCollapsed={isCollapsed}
            expandButtonText={expandButtonText}
            collapseButtonText={collapseButtonText}
            buttonColor={buttonColor}
            onToggleCollapse={setIsCollapsed}
          />
        )}
      </div>
    </>
  );
}

function Button({
  expandButtonText = "",
  collapseButtonText = "",
  isCollapsed,
  buttonColor,
  onToggleCollapse,
}) {
  return (
    <div style={{ display: "inline" }}>
      <button
        style={{ color: buttonColor }}
        onClick={() => onToggleCollapse(!isCollapsed)}
      >
        {isCollapsed ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}
