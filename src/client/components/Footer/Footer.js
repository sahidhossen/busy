import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-base">
        <p className="text-center">
          {' '}
          With love by{' '}
          <Link to="http://www.beyconsulting.it/" target="_blank">
            {' '}
            BeY{' '}
          </Link>{' '}
        </p>
      </div>
    );
  }
}

export default Footer;
