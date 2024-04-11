import React, { useState } from 'react';
import './App.css';
import { projects, collaborations } from './data';
import { IoCloseOutline } from 'react-icons/io5'; // Import the close icon from react-icons
import ReactMarkdown from 'react-markdown';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.classList.add('modal-open');
  };

  const handleCloseClick = () => {
    setSelectedProject(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="portfolio">
      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details-container">
            <div className="close-button" onClick={handleCloseClick}>
              <span>close</span> <IoCloseOutline />
            </div>
            <div className="project-details">
              <h1>{selectedProject.title}</h1>
              <ReactMarkdown className="small-grey">Is...</ReactMarkdown>
              <ReactMarkdown className="large-black">{selectedProject.is}</ReactMarkdown>
              <h4 className="small-grey">Looks like...</h4>
              <div className="looks-like-container">
                {selectedProject.looks.map((imagePath, index) => (
                  <div key={index} className="looks-like-image">
                    <img src={imagePath} alt={`Example ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <>
        <header className="left-aligned">
          <h1>Hi, it's Mike</h1>
          <div className="spacer"></div>
          <p className="subtitle">I'm a...</p>
          <p className="large-black">
            <a href="https://eu.examiner-enterprise.com/story/news/2020/12/04/november-student-month-michael-brockman/3780735001/" target="_blank" rel="noopener noreferrer" className="link-no-underline">
              Oklahoman
            </a>
            &nbsp;at Stanford, focused on making AI more useful for common people.
          </p>
        </header>

        <section>
          <h2 className="small-grey">I've built...</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col">
                <div className="card" onClick={() => handleProjectClick(project)}>
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p className="subtitle">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="small-grey">I've helped...</h2>
          <div className="row">
            {collaborations.map((collaboration, index) => (
              <div key={index} className="col">
                <div className="card" onClick={() => handleProjectClick(collaboration)}>
                  <img src={collaboration.image} alt={collaboration.title} />
                  <h3>{collaboration.title}</h3>
                  <p className="subtitle">{collaboration.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>

      <footer>
        <h2>You've made it this far. Let's stay in touch!</h2>
        <div className="social-links">
          <a href="https://twitter.com/michaelnbrock" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/michael-brockman-15b5b916a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.github.com/mikebrock03" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://drive.google.com/file/d/1SdBH6VoJzW8K3_HtmiVoMgg6A2488qoL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          <p>Email: mikebrockman [at] stanford [dot] edu </p>

        </div>
        <div className="inspired-links">
          <a href="https://theostrauss.com" target="_blank" rel="noopener noreferrer" className="inspired-link">inspired by Theo Strauss</a>
        </div>
      </footer>
    </div>
  );
}

export default App;