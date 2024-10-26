import React, { useContext } from "react";
import "./intro.css";
import me from "../../images/nkpic.png";
import { ThemeContext } from "../../context";
const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Naman Khurana</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">C++ Developer</div>
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Singer</div>
              <div className="i-title-item">DevOps Engineer</div>
            </div>
          </div>
          <p
            className="i-description"
            style={{ textShadow: darkMode && "1px 1px 1px white" }}
          >
            I'm a third year CS student with a focus on production of software,
            web apps and android apps. I'm hardworking, diligent, and
            dedicated—all qualities I put forward in everything I do. Coding has
            become a perfect union of my two favourite passions and I love
            seeing the results of my efforts helping the user's experience. I'm
            finding unique solutions to complex problems and I'm doing it all
            while making the worst puns you've never heard before.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          className="i-scroll"
          viewBox="0 0 75 75"
          fill="none"
          stroke="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;
