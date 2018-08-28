import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import './Faq.less';

class Faq extends React.Component {
  render() {
    const { location } = this.props;
    const robots = location.pathname === '/' ? 'index,follow' : 'noindex,follow';
    return (
      <div>
        <Helmet>
          <title>Busy</title>
          <meta name="robots" content={robots} />
        </Helmet>
        <div className="container faq-container">
          <h1 className="title"> {'FAQ'} </h1>
          <p>
            {' '}
            {
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            }{' '}
          </p>
          <p>
            {' '}
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }{' '}
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

Faq.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Faq;
