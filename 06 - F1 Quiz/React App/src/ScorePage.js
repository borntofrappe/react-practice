import React from 'react';
import { Score, ShareLink } from './style/components';
import SVGIcon from './SVGIcon';

// stateless component to display the score atop a link allowing to share the achievement on twitter
const ScorePage = ({ score, max }) => {
  // built the tweet using the score value
  const text = `${score} out of ${max}... Brief, but impressive`;
  const href = `https://twitter.com/intent/tweet?text=${text}`;
  // render the score in a separated, strong tag and include the link in a paragraph, through an SVG icon making up a tweety bird
  return (
    <>
      <Score>
        <strong>
          {
            score
          }
        </strong>
        /
        {
          max
        }
      </Score>

      <ShareLink href={href} target="_blank">
        Share your score
        <SVGIcon icon="share" size="52px" />
      </ShareLink>
    </>
  );
}

export default ScorePage;
