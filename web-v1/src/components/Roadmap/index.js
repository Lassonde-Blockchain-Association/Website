import "../../App.css";
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";

import info from "./RoadmapInfo";
import {
  TimelineH1,
  RoadmapContainer,
  RoadmapSection,
  TimelineH3,
} from "./TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import img from "../../images/LBC.png";

const Roadmap = () => {
  let workIconStyles = { background: "#6f92cd" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <>
      <RoadmapSection>
        <TimelineH1 id="timeline">ROADMAP ACTIVATIONS</TimelineH1>
        <TimelineH3>A New Story built for our own.</TimelineH3>
        <RoadmapContainer>
          {/* <Background src={img} /> */}

          {/* <TimelineH3>We've set up some goals for ourselves. </TimelineH3> */}
          <VerticalTimeline>
            {info.map((element) => {
              let isWorkIcon = element.icon === "work";
              let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";

              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  contentStyle={{ background: "white", color: "black" }}
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  {/* <h5 className="vertical-timeline-element-subtitle">{element.location}</h5> */}
                  <p id="description">{element.description}</p>
                  {/* {showButton && (<a
                className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                href="/">
                  {element.buttonText}
                </a>)} */}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </RoadmapContainer>
      </RoadmapSection>
    </>
  );
};

export default Roadmap;
