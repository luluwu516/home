import React, { useState } from "react";

import clock from "../assets/images/clock.png";

import exp_frame from "../assets/images/job/avatar_frame.png";
import now from "../assets/images/job/now.png";
import chowfood from "../assets/images/job/chowfood.png";
import ntu from "../assets/images/job/ntu.png";
import college from "../assets/images/job/college.png";

const clock_index = [1, 2, 3, 4, 5, 6];

const jobs = [
  {
    time: 2023,
    title: "Student Tutor",
    place: "Irvine Valley College, Irvine, CA, USA",
    works: [
      "Graded As in Computer Science.",
      "Tutored other students with C, Python, Java, and Microsoft Office.",
    ],
    intro:
      "Teaching and learning are two sides of the same coin. I find great satisfaction and inspiration as I learn to approach problems from various perspectives while working with my students. Besides formal education, I independently learn from online resources, and I share comprehensive notes on Notion with my students and friends.",
  },
  {
    time: 2022,
    title: "Research Assistant",
    place: "National Taiwan University, Taipei, Taiwan",
    works: [
      "Conducted research project on the study of antibacterial feed additives.",
      "Analyzed and visualized bioinformation data of multiple scientific studies.",
    ],
    intro:
      "Recognizing the potential synergy between my role as a research scientist and the field of Computer Science, I embarked on a journey to improve my skill set. Upon immersing myself in programming, a profound sense of achievement emerged from exploring various tools, problem-solving endeavors, and the art of experimentation.",
  },
  {
    time: 2018,
    title: "R&D Specialist",
    place: "Chow food biotechnology Co., Ltd., Taipei, Taiwan",
    works: [
      "Completed team project on clean-label product development.",
      "Co-organized exhibitions and lead multiple teams with people from different backgrounds.",
    ],
    intro:
      "My past academic and job experiences require clear thinking and great attention to detail. I am goal-oriented and collaborative, and I have developed, through team projects, industry-level products that were later commercialized.",
  },
  {
    time: 2012,
    title: "Education in Animal Science",
    place: "MS and BS in Animal Science, Taiwan",
    works: [
      "Screened an anti-inflammatory probiotic and a high lipase activity yeast that were later commercialized in the industry.",
      "Presented research achievements in multiple global conferences.",
    ],
    intro:
      "Driven by a passion for nature, I began my career in Animal Science, where I developed expertise and lab skills. As I later shifted to Computer Science, I channeled my analytical and problem-solving abilities. This change in my career path showcases my adaptability, steadfast commitment to impactful learning, and unwavering passion for positive change.",
  },
];

const jobs_avatar = [
  { transform: "translateX(0)" },
  { transform: "translateX(-100%)" },
  { transform: "translateX(-200%)" },
  { transform: "translateX(-300%)" },
];

const Experience = () => {
  const [jobIndex, setJobIndex] = useState(0);

  return (
    <div className="slide2_experience">
      <div className="bg_clocks">
        {clock_index.map((i, key) => (
          <div className={`clock_box clock_box${i}`} key={key + 1}>
            <img className="clock" src={clock} alt="" width="100%" />
            <svg className="clock_hands" viewBox="-50 -50 100 100">
              <line id={`hour${i}`} x1="0" y1="0" x2="20" y2="0"></line>
              <line id={`min${i}`} x1="0" y1="0" x2="0" y2="36"></line>
            </svg>
          </div>
        ))}
      </div>
      <div className="exp_timeline">
        {jobs.map((job, i) => (
          <div
            className="exp_timeline_point"
            key={i + 1}
            onClick={() => setJobIndex(jobs.indexOf(job))}
          >
            <h2 className="exp_timeline_year">{job.time}</h2>
          </div>
        ))}
      </div>
      <div className="exp_status">
        <div className="exp_status_show">
          <div className="exp_status_appearance">
            <div
              className="exp_status_appearance_img"
              style={jobs_avatar[jobIndex]}
            >
              <img src={now} alt="" />
              <img src={ntu} alt="" />
              <img src={chowfood} alt="" />
              <img src={college} alt="" />
            </div>
            <img
              src={exp_frame}
              alt=""
              className="exp_status_appearance_frame"
            />
          </div>
          <div className="exp_status_job">
            <div className="exp_status_job_title">
              <h2>{jobs[jobIndex].title}</h2>
              <h5>{jobs[jobIndex].place}</h5>
            </div>
            <div className="exp_status_job_works">
              <ul>
                {jobs[jobIndex].works.map((work, i) => (
                  <li key={i + 1}>{work}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="exp_status_job_intro">
          <p>{jobs[jobIndex].intro}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
