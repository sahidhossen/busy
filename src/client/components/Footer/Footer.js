import React from 'react';
import './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-base">
        <p className="text-center">
          {' '}
          With <span className="love">&#10084;</span> by{' '}
          <a href={`http://www.beyconsulting.it/`} target="_blank">
            {' '}
            BeY{' '}
          </a>{' '}
        </p>
      </div>
    );
  }
}

export default Footer;
