import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string
};

class PageFooter extends Component {
  render() {
    const classes = classNames('footer', this.props.className);
    const year = (new Date).getFullYear();
    return (
      <div className={classes}>
        <span className="copyright">&copy; COPYRIGHT HYPERS {year}</span>
      </div>
    );
  }
}

PageFooter.propTypes = propTypes;

export default PageFooter;
