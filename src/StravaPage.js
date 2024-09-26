import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './StravaPage.css';
import routes1 from './images/strava-images/routes-1.png';
import routes2 from './images/strava-images/routes-2.png';
import routes3 from './images/strava-images/routes-3.png';
import routes4 from './images/strava-images/routes-4.png';
import stretch1 from './images/strava-images/stretch-1.png';
import stretch2 from './images/strava-images/stretch-2.png';
import music1 from './images/strava-images/music-1.png';
import training1 from './images/strava-images/training-1.png';
import training2 from './images/strava-images/training-2.png';

const Card = React.memo(({ title, children, isExpanded, onToggle, index }) => {
  console.log(`Card ${index} render. isExpanded: ${isExpanded}`);
  
  return (
    <div 
      className={`card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => onToggle(index)}
      style={{ cursor: 'pointer' }}
    >
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', pointerEvents: 'none' }}>
        {title}
        <span className="arrow">{isExpanded ? '▲' : '▼'}</span>
      </h3>
      <div className={`card-content ${isExpanded ? '' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
});

const StravaPage = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const handleCardToggle = useCallback((index) => {
    setExpandedCards(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  }, []);

  const cardData = [
    {
      title: "encourage sustainability",
      content: (
        <>
          <p>I always get motivated to run by tracking my running statistics. However, I often neglect stretching, which has led to some recent injuries. If there were measured stretching exercises based on my recent activities, I would have been much more motivated to stretch! In turn, this would keep people from taking long breaks (and lost momentum) from the app.</p>
          <div className="image-container">
            <img src={stretch1} alt="stretch 1" />
            <img src={stretch2} alt="stretch 2" />
          </div>
        </>
      )
    },
    {
      title: "make routes community oriented",
      content: (
        <>
          <p>Far too often, I find myself leaving Strava to find alternative routes on AllTrails before recording the workout on Strava. From conversations with other runners, the appeal of AllTrails lies in the "review" and browsing features. If we adopted these features, Strava could become even more community-oriented and people would stay on Strava for all parts of their activity.</p>
          <div className="image-container">
            <img src={routes1} alt="routes 1" />
            <img src={routes2} alt="routes 2" />
            <img src={routes3} alt="routes 3" />
            <img src={routes4} alt="routes 4" />
          </div>
        </>
      )
    },
    {
      title: "training plans on mobile",
      content: (
        <>
          <p>I often wish I had smart advice on how to adequately prepare for a race or to escape a plateau. With training plans made specifically for a particular athlete, performance history and goals can be taken into consideration! In the future, this could be incorporated into Club pages.</p>
          <div className="image-container">
            <img src={training1} alt="training 1" />
            <img src={training2} alt="training 2" />
          </div>
        </>
      )
    },
    {
      title: "share music with runs",
      content: (
        <>
          <p>My friends and I often include lyrics to a song within certain activities, it would make me overjoyed to have a built-in song feature! And a great way to discover new music.</p>
          <div className="image-container">
            <img src={music1} alt="music 1" />
          </div>
        </>
      )
    },
  ];

  return (
    <div className="strava-page">
      <div className="container">
        <header>
          <Link to="/" className="name">Michael Brockman</Link>
        </header>
        <h2 className="to-strava">To Strava</h2>
        <p className="preamble">
          Hi, I'm Michael, a senior at Stanford studying Symbolic Systems with a focus in AI. 
        </p>
        <p className="preamble">
          I have loved Strava ever since I started running cross country in High School, and it would be a dream to work there! My studies in AI and human behavior as well as my personal experience with the app have given me ideas for how to make Strava an even better product.        
        </p>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              isExpanded={expandedCards.includes(index)}
              onToggle={handleCardToggle}
              index={index}
            >
              {card.content}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StravaPage;