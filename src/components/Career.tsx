import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Professional <span>&</span>
          <br /> Academic
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>AKQA</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              During my tenure, I focused on system optimization and backend 
              architecture. I successfully deployed high-performance Strapi CMS 
              solutions that significantly accelerated data delivery by 25% and 
              improved overall application responsiveness.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>BPIT, New Delhi</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Building a robust theoretical foundation in CS, maintaining an 
              8.27 CGPA. I consistently bridge academic theory with practical 
              engineering, specializing in scalable web development and AI infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Winner</h4>
                <h5>GTBIT & MAIT</h5>
              </div>
              <h3>Awards</h3>
            </div>
            <p>
              Demonstrated competitive excellence by securing 3rd place at the GTBIT 
              Hackathon (outpacing 80+ agile teams) and ranking in the Top 17 at 
              HackMait among 700+ developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
