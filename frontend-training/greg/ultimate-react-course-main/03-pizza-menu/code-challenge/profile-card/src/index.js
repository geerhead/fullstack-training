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
          " in continued learning. I enjoy League of Legends TFT and old school MMORPGs like Everquest P99"
        }
      />
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
      <h1 className={"profile_name"}>{props.name}</h1>
      <p>{props.description}</p>
      <div className={"skills_section"}>
        <ProfileSkills skill={"HTML+CSS"} bgColor={"blue"} />
        <ProfileSkills skill={"Javascript"} bgColor={"red"} />
        <ProfileSkills skill={"Git+GitHub"} bgColor={"orange"} />
        <ProfileSkills skill={"Python"} bgColor={"green"} />
        <ProfileSkills skill={"AWS"} bgColor={"orangered"} />
        <ProfileSkills skill={"Azure"} bgColor={"darkblue"} />
        <ProfileSkills skill={"CICD"} bgColor={"limegreen"} />
        <ProfileSkills skill={"React"} bgColor={"lightblue"} />
        <ProfileSkills skill={"GCP"} bgColor={"blue"} />
      </div>
    </div>
  );
}

function ProfileSkills(props) {
  return (
    <div>
      <span
        className={"skills_span"}
        style={{ backgroundColor: props.bgColor }}
      >
        {props.skill}
      </span>
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
