import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color={"blue"}
        maxRating={5}
        onRatingChange={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<StarRating maxRating={5} color={"black"} />*/}
    {/*<StarRating maxRating={5} color={"purple"} size={24} className={"test"} />*/}
    {/*<StarRating messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]} />*/}
    {/*<StarRating defaultRating={3} />*/}
    {/*<Test />*/}
  </React.StrictMode>
);
