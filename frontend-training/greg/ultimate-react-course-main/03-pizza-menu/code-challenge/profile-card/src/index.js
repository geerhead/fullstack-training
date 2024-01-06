import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return <ProfileCard />;
}

function ProfileCard() {
  return (
    <div className={"profile-container"}>
      <ProfilePhoto
        img_src={"profile_pics/Greg.jpeg"}
        description={"Picture of Greg Geer"}
      />
      <ProfileInfo
        name={"Greg Geer"}
        description={
          "DevOps Engineer turned Full-stack to better understand the SLDC. I enjoy everything technology and believe" +
          "in continued learning. I enjoy League of Legends TFT and old school MMORPGs like Everquest P99"
        }
      />
      <ProfileSkills />
    </div>
  );
}

function ProfilePhoto(props) {
  return (
    <img
      className={"profile_photo"}
      src={props.img_src}
      alt={props.description}
    />
  );
}

function ProfileInfo(props) {
  return (
    <div className={"profile_info"}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function ProfileSkills(props) {
  return (
    <div>
      <span className={"skills_span"}>HTML+CSS</span>
    </div>
  );
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
