import React from "react";

import { SocialFlex } from './Social.styles.js'

const Social = () => {


  return (
    <SocialFlex>

        <a href="https://www.linkedin.com/in/amanda-jericho-b5750641/" target='_blank'  className="icon icon-linkedin"></a>
        <a href='https://github.com/ajericho' target='_blank' className="icon icon-github" ></a>
        <a href="mailto:ajericho@gmail.com" target='_blank' className="icon icon-mail"></a>

    </SocialFlex>
  );
};

export default Social; 