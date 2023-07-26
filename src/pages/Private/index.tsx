import { JSX } from 'react';
import ReactMarkdown from 'react-markdown';
import privateMd from './private';

import './index.scss';

function Private(): JSX.Element {
  return (
    <div className="private">
      <div className="container">
        <ReactMarkdown children={privateMd} />
      </div>
    </div>
  );
}

export default Private;