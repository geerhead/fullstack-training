export default function NextButton({ answer, dispatch }) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-uni"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}
