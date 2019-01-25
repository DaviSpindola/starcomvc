import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

/**
 * Generic carousel implementing with react-slick lib
 *
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
class Carousel extends React.Component {
  static propTypes = {
    settings: PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider variable-width center",
    // centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
    focusOnSelect: true
  };

  render() {
    const { settings, children } = this.props;

    return (
      <Slider {...this.props} {...settings}>
        {children}
      </Slider>
    );
  }
}

export default Carousel;
