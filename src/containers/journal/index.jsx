import React from "react";
import { BsJournals } from "react-icons/bs";
import PageHeaderContent from '../../components/pageHeaderContent/index';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { details } from "./utils";
import './styles.scss';
import { IoIosJournal } from "react-icons/io";

const Journals = () => {
    return (
        <section id="journal" className="journal">
            <PageHeaderContent
                headerText="Journals"
                icon={<BsJournals size={40}/>}
            />
            <div className="timeline">
                <div className="timeline__experience">
                    <h4 className="timeline__experience__subhead">These Reflective Journals help me for my career development...</h4>
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
                                icon={<IoIosJournal />}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)',
                                }}
                            >
                                <div className="verticle-timeline-element-title-wrapper">
                                    <h3>
                                        {item.title}
                                    </h3>
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

export default Journals;
