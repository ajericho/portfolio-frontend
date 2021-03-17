import React from "react";
import MarkdownView from 'react-showdown';
import { ExperienceContainer } from './Experience.styles';

const Experience = ({ experience }) => {

  const markdown = experience.description;

  return (

    <ExperienceContainer>
      <div>
        <h3>{experience.title}</h3>
        <h4>{experience.company}</h4>
        <h4>{experience.startDate} - { experience.endDate }</h4>
        </div>
      <MarkdownView markdown={markdown} />



    </ExperienceContainer>
  );
};

export default Experience; 