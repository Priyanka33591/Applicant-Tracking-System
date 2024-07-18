import React from 'react';
import { useLocation } from 'react-router-dom';
import './ScoreDisplay.css';

const ScoreDisplay = () => {
  const location = useLocation();
  const { response } = location.state || {};

  return (
    <div className="score-container">
      <div id="score-container">
        <h1 className="heading">Resume Score</h1>
        {response ? (
          <div>
            <p className="para"><strong>ATS Score:</strong> {response['ATS Score']}</p>
            <p className="para"><strong>Missing Keywords:</strong> {response['Missing Keywords'].join(', ')}</p>
            <p className="para"><strong>Profile Summary:</strong> {response['Profile Summary']}</p>
            <p className="para"><strong>Some Special Highlights:</strong> {response['Some Special Highlights'].join(', ')}</p>
            <p className="para"><strong>Improvement Suggestions:</strong> {response['Improvement Suggestions'].join(', ')}</p>
          </div>
        ) : (
          <p className="loading">Loading score...</p>
        )}
      </div>
    </div>
  );
};

export default ScoreDisplay;
