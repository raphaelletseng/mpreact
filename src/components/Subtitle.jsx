import React from 'react';
import styled from '@emotion/styled';

const Subtitle = styled('div')`
  font-family: 'opensans-bold', sans-serif;
  font-size: 2em;
  letter-spacing: 2px;
  text-transform: lowercase;
  font-weight: bolder;
  color: ${props => props.subtitleColor};
  padding-top: 0.33em;
  margin-bottom: 0.2em;
  padding-bottom: 0.1em;
  padding-left: 0.0em;
  padding-right: 0.0em;
  width: 60%:
  min-width: 30%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.2em;


  @media screen and (max-width: 600px){
    font-size: 1.5em;
  }
`;

export default ({children, subtitleColor})=>(
  <React.Fragment>
    <Subtitle subtitleColor = {subtitleColor}>{children}</Subtitle>
  </React.Fragment>
)
