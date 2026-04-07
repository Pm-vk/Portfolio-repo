import React from 'react';
import './styles/BackgroundEffect.css';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="bg-container">
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
    </div>
  );
};

export default BackgroundEffect;
