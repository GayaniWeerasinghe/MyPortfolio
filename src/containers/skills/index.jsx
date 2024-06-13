import React from "react";
import { SiSkillshare } from "react-icons/si";
import PageHeaderContent from '../../components/pageHeaderContent/index'
import { details } from "./utils";
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from "rc-progress";
import Angular from '../../assest/angular.jpg'
import AI from '../../assest/AI.jpg'
import Hnd from '../../assest/HND Certificate.jpg'
import './styles.scss'

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<SiSkillshare size={40} />}
            />
            <div className="skills__content-wrapper">
                {
                    details.map((item, i) => (
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}
                                end={{
                                    transform: 'translateX(0px)'
                                }}
                            >
                                <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                                <div className="skills__content-wrapper__inner-content__progressbar-container">
                                    {
                                        item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity:1", "opacity:0"]}
                                                iterationCount='1'
                                                key={j}
                                            >
                                                <div className="progressbar-wrapper">
                                                    <p>{skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.percentage}
                                                        strokeWidth='2'
                                                        strokeColor='var(--yellow-theme-main-color)'
                                                        trailWidth='2'
                                                        strokeLinecap="square"
                                                    />
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
            {/* Display certificates */}
            <div className="certificates">
                <h3 className="certificates__text">Certificates</h3>
                <div className="certificates__wrapper">
                    <div className="certificates__wrapper__img-content">
                        <img src={Hnd} alt={'HND in Information Technology'} />
                        <p>HND in Information Technology</p>
                    </div>
                    <div className="certificates__wrapper__img-content">
                        <img src={Angular} alt={'Introduction to Angular Js'} />
                        <p>Introduction to Angular Js</p>
                    </div>
                    <div className="certificates__wrapper__img-content">
                        <img src={AI} alt={'AI in Digital Marketing'} />
                        <p>AI in Digital Marketing</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
