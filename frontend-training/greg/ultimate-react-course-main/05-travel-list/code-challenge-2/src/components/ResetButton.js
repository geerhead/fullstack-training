export default function ResetButton({
  handleCost,
  handleService,
  handleFriendService,
  onDisplay,
}) {
  function resetAll() {
    handleCost("");
    handleService(0);
    handleFriendService(0);
  }

  return (
    <div
      style={onDisplay ? { display: "none" } : {}}
      className={"reset-button--container"}
    >
      <button onClick={resetAll}>Reset</button>
    </div>
  );
}
