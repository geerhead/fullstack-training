export default function ResetButton({
  handleCost,
  handleService,
  handleFriendService,
}) {
  function resetAll() {
    handleCost("");
    handleService(0);
    handleFriendService(0);
  }

  return (
    <div className={"reset-button--container"}>
      <button onClick={resetAll}>Reset</button>
    </div>
  );
}
