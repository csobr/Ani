import {RichText} from 'prismic-reactjs';
import React from 'react';

type Props = {
  content: any;
  header: string;
  getRef: any;
};
const Highlight = ({content, header, getRef}: Props) => (
  <div ref={getRef} className="highlight" data-scrollcolor="#000320">
    <div className="star-container">
      <div className="star" />
    </div>
    <h3>{header}</h3>
    <br />
    <p>{RichText.asText(content.data.content)}</p>
    <div className="star-container">
      <div className="star" />
    </div>
    <div className="star" />
  </div>
);
export default Highlight;
