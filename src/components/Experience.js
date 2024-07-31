import React from "react";

import exp from "../assets/images/about/exp.png";

const experiences = [
  {
    time: "Jan. 2023",
    title: "Student Tutor",
    location: "Irvine Valley College, Irvine, CA",
    works: [
      "Managed and coordinated Computer Tutoring sessions",
      "Guided students from 9 to over 50-years-old in learning C, C++, Python, Java, Data Structures, Microsoft Office, and other subjects",
      "Developed and maintained a tutoring resource website",
    ],
  },
  {
    time: "Aug. 2022",
    title: "Computer Science Student",
    location: "Irvine Valley College, Irvine, CA",
    works: [
      "Applied academic knowledge to develop and improve on personal projects",
      "Served as a student tutor, providing assistance to peers",
    ],
  },
  {
    time: "Feb. 2022",
    title: "Research Assistant",
    location: "National Taiwan University, Taipei, Taiwan",
    works: [
      "Developed a Python application to group experimental animals, which was utilized among peers",
      "Analyzed and visualized bioinformatic data for multiple scientific studies",
      "Publication: Wang, S.-Y., Chen, Y.-P., Huang, R.-F., Wu, Y.-L., Ho, S.-T., Li, K.-Y., Watanabe, K., & Chen, M.-J. (2022). Subspecies classification and comparative genomic analysis of Lactobacillus kefiranofaciens HL1 and M1 for potential niche-specific genes and pathways. Microorganisms, 10(8), 1637. https://doi.org/10.3390/microorganisms10081637",
    ],
  },
  {
    time: "Sep. 2018",
    title: "Research and Development (R&D) Specialist",
    location: "Chow Food Biotechnology Co., Ltd, Taiwan",
    works: [
      "Completed a team project on clean-label product development",
      "Co-organized exhibitions, leading diverse teams from various backgrounds",
    ],
  },
  {
    time: "Sep. 2016",
    title: "MS in Animal Science and Technology",
    location: "National Taiwan University, Taipei, Taiwan",
    works: [
      "Isolated and identified lipase-producing microorganisms from food for margarine production",
      "Presented research achievements in multiple global conferences and received an honorable mention in the 2017 Taiwan Association for Lactic Acid Bacteria poster competition",
      "Received the 30th Gemfont Co. Scholarship (award for outstanding student) in 2017",
    ],
  },
  {
    time: "Sep. 2012",
    title: "BS in Animal Science",
    location: "National Chung Hsing University, Taichung, Taiwan",
    works: [
      "Served as the Vice President of the school volleyball team and led the team to the University Volleyball League",
      "Served as a Student Council member assisting with managing student activities",
      "Received the Academic Excellence Award (award for exemplary academic performance) in 2014",
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience">
      <ul className="timeline">
        <h2 className="timeline-header">My experiences</h2>
        {experiences.map((job, i) => (
          <React.Fragment key={i}>
            <li className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-time">{job.time}</div>
                <h3 className="timeline-title">{job.title}</h3>
                <h5 className="timeline-location">
                  <i className="fa-solid fa-location-dot"></i>
                  {job.location}
                </h5>
                <ul className="timeline-works">
                  {job.works.map((work, j) => (
                    <li className="timeline-work" key={i + "-" + j}>
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {i === 2 ? (
              <li className="timeline-milestone">
                <div className="timeline-milestone-info">
                  In 2022, after experimenting with R to visualize
                  bio-informatic data, I learned how helpful programming could
                  be as a tool. Since then, I have been learning other
                  programming languages, and decided to dive in more into the
                  computer world.
                </div>
                <img
                  src={exp}
                  alt="Leave comfort zone"
                  className="timeline-milestone-img"
                />
              </li>
            ) : null}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
