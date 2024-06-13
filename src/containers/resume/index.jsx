import React from "react";
import { IoDocument } from "react-icons/io5";
import PageHeaderContent from '../../components/pageHeaderContent/index';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { details } from "./utils";
import './styles.scss';
import { MdWork } from 'react-icons/md';
import { IoSchool } from "react-icons/io5";
import ResumeHeaderContent from "../../components/resumeHeaderContent";

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <ResumeHeaderContent
                headerText="My Resume"
                // icon={<IoDocument size={40} />}
            />
            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">
                        Experience
                    </h3>
                    <VerticalTimeline
                        layout="1-column"
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {details.experience.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__experience__verticle-timeline-element"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: '1.5px solid var(--yellow-theme-main-color)'
                                }}
                                icon={<MdWork />}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)',
                                }}
                            >
                                <div className="verticle-timeline-element-title-wrapper">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <h4>
                                        {item.subTitle}
                                    </h4>

                                </div>
                                <p className="verticle-timeline-element-title-wrapper-description">
                                    {item.description}
                                </p>

                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">
                        Education
                    </h3>
                    <VerticalTimeline
                        layout="1-column"
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {details.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__experience__verticle-timeline-element"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: '1.5px solid var(--yellow-theme-main-color)'
                                }}
                                icon={<IoSchool />}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)',
                                }}
                            >
                                <div className="verticle-timeline-element-title-wrapper">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <h4>
                                        {item.subTitle}
                                    </h4>
                                </div>
                                <p className="verticle-timeline-element-title-wrapper-description">
                                    {item.description}
                                </p>

                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;
