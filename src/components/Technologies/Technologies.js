import React, { Component } from 'react';

function Technologies(props) {
  let technologiesList = props && props.technologies;
  if (technologiesList){
    technologiesList = technologiesList.map((technology, index) =>
      <li key={index}>
        {technology.name}: {technology.proficiency}
      </li>
    );
  }
  return (
    <div>
      <h2>Technologies</h2>
      <ul>{technologiesList}</ul>
    </div>
  );
}

export default Technologies;
