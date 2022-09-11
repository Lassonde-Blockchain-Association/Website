import "../../App.css";
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";

import info from "./RoadmapInfo";
import { TimelineH1, RoadmapContainer, Background } from "./TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

// import videoBg from "../../video/bc3.mp4";

const Roadmap = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <RoadmapContainer>
      {/* <Background src={videoBg} autoPlay loop muted /> */}
      <TimelineH1 id="timeline">Roadmap</TimelineH1>
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
  );
};

export default Roadmap;
