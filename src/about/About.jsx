import React, { useContext } from 'react'
import './about.css'
import Award from '../images/award.png'
import { ThemeContext } from '../context';
const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className="a">
      <div className="a-left">
        <div className="a-card bg" style={{backgroundColor:darkMode?'white':'#333'}}></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className='a-img'
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        The most important property of a program is whether it accomplishes the intention of its user.
        </p>
        <p className="a-desc">
        Soon-to-be Computer Science graduate eager to continue exploring the inspiring, innovative field of Android Development, Web Development and Software Development. 
        <ul className='a-desc-list'>
        <li>Proficient in languages like C++ Java and Python</li>
        <li>Front-end Languages like HTML, CSS and J S</li>
        <li>Proficient in Twitter Bootstrap Framework</li>
        <li>Familiar with React Library of J S</li>
        <li>Proficient in Apps Development</li>
        <li>Competitive Coding and Problem Solving.</li>
        </ul>
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
