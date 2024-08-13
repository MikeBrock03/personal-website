// App.js
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { projects, collaborations, personalSection } from './data';
import { IoCloseOutline } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import tape from './images/tape.png';
import redline from './images/redline.png';


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExplanation, setSelectedExplanation] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  
  // Effect to flip all cards on initial load
  useEffect(() => {
    const flipAllCards = () => {
      const cardIds = document.querySelectorAll('.item-card').length;
      const allFlipped = {};
      for (let i = 0; i < cardIds; i++) {
        allFlipped[i] = true;
      }
      setFlippedCards(allFlipped);
    };

    const unflipAllCards = () => {
      setFlippedCards({});
    };

    const flipTimer = setTimeout(flipAllCards, 1000);
    const unflipTimer = setTimeout(unflipAllCards, 2000);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(unflipTimer);
    };
  }, []);

  const flipCard = useCallback(() => {
    const cardIds = document.querySelectorAll('.item-card').length;
    const randomCardId = Math.floor(Math.random() * cardIds);
    
    setFlippedCards(prev => ({
      ...prev,
      [randomCardId]: true
    }));

    // Set a timeout to flip the card back after 500ms
    setTimeout(() => {
      setFlippedCards(prev => ({
        ...prev,
        [randomCardId]: false
      }));
    }, 800);
  }, []);

  useEffect(() => {
    const flipInterval = setInterval(flipCard, 2000); // Flip a card every 2 seconds
    return () => clearInterval(flipInterval);
  }, [flipCard]);

  const getCardClass = (index) => {
    return `item-card ${flippedCards[index] ? 'flipped' : ''}`;
  };
  
  const handleProjectClick = (project, event) => {
    event.preventDefault();
    setSelectedProject(project);
    document.body.classList.add('modal-open');
  };

  const handleCloseClick = () => {
    setSelectedProject(null);
    document.body.classList.remove('modal-open');
  };

  const handleImageClick = (e, explanation, image) => {
    e.stopPropagation();
    setSelectedExplanation({text: explanation, image: image});
  };
  
  const handleExplanationClose = () => {
    setSelectedExplanation(null);
  };

  return (
    <div className="portfolio" >
      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details-container">
            <div className="project-details">
              <h1>{selectedProject.title}</h1>
              <ReactMarkdown className="small-grey">is...</ReactMarkdown>
              <ReactMarkdown className="large-black">{selectedProject.is}</ReactMarkdown>
              <h4 className="small-grey">looks like...</h4>
              <div className="looks-like-container">
                {selectedProject.looks.map((imagePath, index) => (
                  <div key={index} className="looks-like-image">
                    <img src={imagePath} alt={`Example ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <IoCloseOutline className="close-button-fixed" onClick={handleCloseClick} />
        </div>
      )}
      {selectedExplanation && (
        <div className="explanation-overlay">
          <div className="explanation-card">
            <img src={selectedExplanation.image} alt="Explanation" />
            <p>{selectedExplanation.text}</p>
            <button onClick={handleExplanationClose}><span>close</span> </button>
             
          </div>
        </div>
      )}


      <section className="center-section">
        <div className="row">
          <div className="col">
            <div className="item-container">
              {!selectedProject}
              <div className={`item-card`}>
                <div className="item-text">
                  <p className="permanent-marker title">hi, it's Michael!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="item-container">
              {!selectedProject}
              <div className={`item-card sticky`}>
                <div className="item-text">
                  <p className="permanent-marker subtitle">i'm an Oklahoman at Stanford, passionate about bringing the benefits of AI to all.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
    <div className="col">
      <div className="item-container">
        {!selectedProject && <img src={tape} alt="tape" className="tape" />}
        <div className={getCardClass(0)}>
          <div className="item-front">
            <div className="item-image" onClick={(e) => handleImageClick(e, personalSection.leftCol.explanation, personalSection.leftCol.image)}>
              <img src={personalSection.leftCol.image} alt="Michael" />
            </div>
          </div>
          <div className="item-back">
            <p>click to learn more</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="item-container">
        {!selectedProject && <img src={tape} alt="Tape" className="tape" />}
        <div className={getCardClass(1)}>
          <div className="item-front">
            <div className="item-image" onClick={(e) => handleImageClick(e, personalSection.middleCol.explanation, personalSection.middleCol.logo)}>
              <img src={personalSection.middleCol.logo} alt="Oklahoman" />
            </div>
          </div>
          <div className="item-back">
            <p>click here to learn more</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="item-container">
        {!selectedProject && <img src={tape} alt="tape" className="tape" />}
        <div className={getCardClass(2)}>
          <div className="item-front">
            <div className="item-image" onClick={(e) => handleImageClick(e, personalSection.rightCol.explanation, personalSection.rightCol.image)}>
              <img src={personalSection.rightCol.image} alt="Michael" />
            </div>
          </div>
          <div className="item-back">
            <p>click to learn more</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>

      {collaborations.map((collaboration, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <div className="row">
              <div className="col">
                <div className="item-text">
                  <p className="subtitle-on-board">i've helped...</p>
                </div>
              </div>
            </div>
          )}
          <section className="center-section">
            <div className="row">
              <div className="col">
                <div className="item-container" onClick={(event) => handleProjectClick(collaboration, event)}>
                  {!selectedProject }
                  <div className={getCardClass(6)}>
                    <div className='item-front'>
                      <div className="item-image">
                        <img src={collaboration.image} alt={collaboration.title} />
                      </div>
                    </div>
                    <div className="item-back">
                      <p>click to learn more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item-container">
                  {!selectedProject }
                  <div className={`item-card`}>
                    <div className="item-text">
                      <p className="permanent-marker subtitle">{collaboration.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item-container">
                  {!selectedProject && <img src={tape} alt="tape" className="tape" />}
                  <div className={getCardClass(7)}>
                    <div className="item-front">
                      <div className="item-image" onClick={(e) => handleImageClick(e, collaboration.explanations[0], collaboration.previews[0])}>
                        <img src={collaboration.previews[0]} alt={collaboration.title} />
                      </div>
                    </div>
                    <div className="item-back">
                      <p>click to learn more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="item-container">
                  {!selectedProject }
                  <div className={`item-card `}>
                    <div className="item-text">
                      <p className="permanent-marker quote">{collaboration.quotes[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item-container">
                  {!selectedProject && <img src={tape} alt="tape" className="tape" />}
                  <div className={getCardClass(8)}>
                    <div className="item-front">
                      <div className="item-image" onClick={(e) => handleImageClick(e, collaboration.explanations[1], collaboration.previews[1])}>
                        <img src={collaboration.previews[1]} alt={collaboration.title} />
                      </div>
                    </div>
                    <div className="item-back">
                      <p>click here to learn more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item-container">
                  {!selectedProject}
                  <div className={`item-card`}>
                    <div className="item-text">
                      <p className="permanent-marker quote">{collaboration.quotes[1]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {index !== collaborations.length - 1 && (
            <div className="redline-container">
              <img src={redline} alt="Redline" className="redline" />
            </div>
          )}
        </React.Fragment>
      ))}

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <div className="row">
              <div className="col">  
                <p className="subtitle-on-board">i've built...</p>
              </div> 
            </div>
          )}
          <section className="center-section">
            <div className="row">
              <div className="col">
                <div className="item-container" onClick={(event) => handleProjectClick(project, event)}>
                  {!selectedProject }
                  <div className={getCardClass(3)}>
                    <div className="item-front">
                      <div className="item-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                    </div>
                    <div className="item-back">
                      <p>click to learn more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item-container">
                  {!selectedProject}
                  <div className={`item-card`}>
                    <div className="item-text">
                      <p className="permanent-marker subtitle">{project.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item-container">
                  {!selectedProject && <img src={tape} alt="tape" className="tape" />}
                  <div className={getCardClass(4)}>
                    <div className='item-front'>
                      <div className="item-image" onClick={(e) => handleImageClick(e, project.explanations[0], project.previews[0])}>
                        <img src={project.previews[0]} alt={project.title} />
                      </div>
                    </div>
                    <div className='item-back'>
                      <p>click to learn more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="item-container">
                  {!selectedProject}
                  <div className={`item-card `}>
                    <div className="item-text">
                      <p className="permanent-marker quote">{project.quotes[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item-container">
                  {!selectedProject && <img src={tape} alt="tape" className="tape" />}
                  <div className={getCardClass(5)}>
                    <div className='item-front'>
                      <div className="item-image" onClick={(e) => handleImageClick(e, project.explanations[1], project.previews[1])}>
                        <img src={project.previews[1]} alt={project.title} />
                      </div>
                    </div>
                    <div className="item-back">
                      <p>click to learn more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item-container">
                  {!selectedProject}
                  <div className={`item-card `}>
                    <div className="item-text">
                      <p className="permanent-marker quote">{project.quotes[1]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {index !== projects.length - 1 && (
            <div className="redline-container">
              <img src={redline} alt="Redline" className="redline" />
            </div>
          )}
        </React.Fragment>
      ))}

      <footer>
        <div className="row">
              <div className="item-text">
                <p className="subtitle-on-board">let's stay in touch!</p>
              </div>
        </div>
        <div className="social-links">
          {[
            { url: 'https://twitter.com/michaelnbrock', label: 'twitter' },
            { url: 'https://www.linkedin.com/in/michael-brockman-15b5b916a/', label: 'linkedin' },
            { url: 'https://www.github.com/mikebrock03', label: 'github' },
            { url: '/resume_2024.pdf', label: 'resume' },
          ].map((link, index) => (
            <div className="item-container">
              <div key={index} className="item-card">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="permanent-marker quote">{link.label}</a>
              </div>
            </div>
          ))}
          <div className="item-container">
            <div className="item-card">
              <p className="permanent-marker quote">mikebrockman [at] stanford [dot] edu </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;