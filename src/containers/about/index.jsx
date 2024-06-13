import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent/index';
import { Animate } from 'react-simple-animate';
import './aboutstyles.scss';
import { DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
import { RiGithubFill } from "react-icons/ri";
import profileImage from './profile.png'; 

const personaldetails = [
  {
    label: 'Name',
    value: 'W.P.G.M.Weerasinghe'
  },
  {
    label: 'Age',
    value: '24'
  },
  {
    label: 'Address',
    value: 'Gampaha'
  },
  {
    label: 'Email Address',
    value: 'maduwpg@gmail.com'
  },
  {
    label: 'Contact No',
    value: '0768394703'
  },
];

const summary = 'Efficient Associate Software Engineer with 1 year experience and a final year undergraduate who is following a BSc. Hons Software Engineering degree at Sri Lanka Institute of Information Technology (SLIIT).I have experiences on developing applications using different languages and technologies such as JAVA, PHP, MERN Stack at SLIIT and company which I am currently working. Now I am seeking for a job as a Software Engineer to improve that development knowledge and skills.';

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <p>{summary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className="infoText">Personal Information</h3>
            <ul>
              {personaldetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label} :</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <RiGithubFill size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <img src={profileImage} alt="My Photo" className="about__content__servicesWrapper__photo zoomIn" />
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
