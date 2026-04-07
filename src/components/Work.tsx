import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Recipify SERVD",
    category: "AI Smart Kitchen Assistant",
    description: "A complete reimagining of pantry management. This application harnesses computer vision AI to transform everyday ingredient imagery into step-by-step, nutrition-first recipes.",
    tools: "Next.js 15, Gemini Pro Vision, Arcjet, Clerk",
    image: "/images/recipify.png",
    link: "https://recipify-amber.vercel.app/",
  },
  {
    title: "Finance Dashboard & RBAC API",
    category: "Production-ready RESTful API",
    description: "A secure, production-ready ledger system that drives real-time financial analytics. It acts as a fortress for data, utilizing ACID guarantees and granular role-based access control.",
    tools: "Node.js, Express, MongoDB Aggregation, JWT, Zod",
    image: "/images/finance.png",
    link: "https://finance-dashboard-backend-oryq.onrender.com",
  },
  {
    title: "AI Interview Prep",
    category: "Career Assessment Platform",
    description: "An automated simulation environment that benchmarks career readiness. It orchestrates complex background tasks to deliver simulated interviews and dynamic market visualizations.",
    tools: "Next.js, Prisma, Gemini AI, Inngest, Recharts",
    image: "/images/interview.png",
    link: "https://ai-interview-prep-rose.vercel.app/",
  },
  {
    title: "The Custom Cart App",
    category: "Personalization Engine",
    description: "Bridging the gap between imagination and reality, this platform enables users to architect their own apparel with real-time 3D visual feedback, powered by a robust backend architecture.",
    tools: "Next.js 15, Strapi CMS, PostgreSQL, Imagekit",
    image: "/images/custom_cart.png",
    link: "https://custom-cart-app.vercel.app",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-link-wrapper">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-hyperlink"
                            data-cursor="disable"
                          >
                            View Live Application <MdArrowOutward />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
