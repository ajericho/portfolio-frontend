import React from "react";

import { SkillContainer } from './Skill.styles';

import MarkdownView from 'react-showdown';



const Skill = ({ skill }) => {

  const markdown = skill.list;

  return (
    <SkillContainer>
        <h4>{skill.type}</h4>
        <MarkdownView markdown={markdown} />


    </SkillContainer>
  );
};

export default Skill;