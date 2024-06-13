import React from "react";
import { BiSolidContact } from "react-icons/bi";
import PageHeaderContent from '../../components/pageHeaderContent/index';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { RiGithubFill } from "react-icons/ri";
import {Link} from 'react-router-dom'

const personaldetails = [
  {
    icon: <FaPhone size={30}/>,
    link: '0768394703'
  },
  {
    icon: <FaEnvelope size={30}/>,
    link: 'maduwpg@gmail.com'
  },
  {
    icon: <FaGithub size={30}/>,
    link: 'https://github.com/GayaniWeerasinghe'
  },
  {
    icon: <FaLinkedin size={30}/>,
    link: 'https://www.linkedin.com/in/gayani-weerasinghe-6480b823a'
  },
  {
    icon: <FaMapMarkerAlt size={30}/>,
    link: 'No.146/1,Near Temple,Dewalapola'
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BiSolidContact size={40} />}
      />

      <div className="contact__content">
        <div className="contact__content__personalWrapper">
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
            <ul>
              {personaldetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.icon}</span>
                  <Link to={item.link}><span className="value">{item.link}</span></Link>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="contact__content__servicesWrapper">
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
            <div className="contact__content__servicesWrapper__innerContent">
              <div>
                <FaPhone size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaEnvelope size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaLinkedin size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <RiGithubFill size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Contact;
