import React from 'react';
import PropTypes from 'prop-types';

const arrowIcon = '/images/arrow-right.png';
const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
    role="link"
    tabIndex={0}
  >
    <img className="topslider-prev-image" src={arrowIcon} alt="Prev" />
  </div>
);
PrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrevArrow;
