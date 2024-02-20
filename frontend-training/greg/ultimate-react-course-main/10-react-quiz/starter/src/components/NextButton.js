export default function NextButton({ answer, dispatch, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-uni"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-uni"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
