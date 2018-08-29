import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import '../faq/Faq.less';

class About extends React.Component {
  render() {
    const { location } = this.props;
    const robots = location.pathname === '/' ? 'index,follow' : 'noindex,follow';
    return (
      <div>
        <Helmet>
          <title>Steem Italia</title>
          <meta name="robots" content={robots} />
        </Helmet>
        <div className="container faq-container">
          <h1 className="title"> {'ABOUT US'} </h1>
          <p>
            {' '}
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
            }{' '}
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

About.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default About;
