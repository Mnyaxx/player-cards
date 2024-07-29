// src/Player.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './Player.css'; // Import the CSS file

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#f8f9fa' }}> {/* Card background color */}
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        style={{ 
          width: '100%', 
          height: '200px', 
          objectFit: 'cover' 
        }} 
      />
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text>
          <p>Team: {team}</p>
          <p>Nationality: {nationality}</p>
          <p>Jersey Number: {jerseyNumber}</p>
          <p>Age: {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown Nationality',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://via.placeholder.com/150'
};

export default Player;
