import React from 'react';
import PropTypes from 'prop-types';
import './HeroBannerNonUser.less';

const bannerContent = {
  image: '/images/hero_banner.jpg',
  titleID: 'hero_banner_title_1',
  defaultTitle: 'Write and publish a post on Steem',
  defaultContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  className: 'HeroBannerSlider__image',
  number: 1,
};

const HeroBannerNoneUser = ({ onCloseClick, visible }) =>
  !visible ? null : (
    <div className="HeroBanner">
      <a onClick={onCloseClick} role="button" tabIndex="0" className="HeroBanner__close">
        <i className="iconfont icon-close" />
      </a>
      <div className="HeroBanner__container">
        <img
          src={bannerContent.image}
          className="HeroBanner__content__image"
          alt={bannerContent.defaultTitle}
        />
        <div className="HeroBanner__content__slogan">
          <h3 className="HeroBanner__content__slogan__title"> {bannerContent.defaultTitle} </h3>
          <p className="HeroBanner__content__slogan__details"> {bannerContent.defaultContent} </p>
        </div>
      </div>
    </div>
  );
HeroBannerNoneUser.propTypes = {
  visible: PropTypes.bool,
  onCloseClick: PropTypes.func,
};
HeroBannerNoneUser.defaultProps = {
  visible: true,
  onCloseClick: () => {},
};
export default HeroBannerNoneUser;
