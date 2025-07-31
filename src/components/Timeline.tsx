import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experience } from "../data/experience";

export default function Timeline() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-56" >
        {/* <h1 className="text-3xl lg:text-6xl text-white tracking-tight font-bold text-center uppercase mt-20 mb-12">My Experience</h1> */}
        <VerticalTimeline>
          {experience.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.tahun}
              dateClassName="text-white"
              iconStyle={{
                backgroundImage: `url(${item.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}
