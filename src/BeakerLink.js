import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

import beaker from './img/beaker.svg';

let styles;

const BeakerLink = ( { label, to } ) => (
  <Link to={ to } className={ css( styles.link ) }>
    <img src={ beaker } alt="presentation" />
    <span className={ css( styles.linkText ) }>{ label }</span>
  </Link>
);

BeakerLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

BeakerLink.defaultProps = {

};

styles = StyleSheet.create( {
  link: {
    padding: '1.5rem',
    width: '20.4rem',
    display: 'flex',
    alignItems: 'center',
    margin: '0.8rem 0',
    textDecoration: 'none',
    cursor: 'pointer',

    ':hover': {
      border: 0,
      borderRadius: 12,
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.1)',
    },
  },

  linkText: {
    fontFamily: 'Source Sans Pro',
    fontSize: '1.8rem',
    fontWeight: 500,
    color: '#000000',
    flex: 1,
    padding: '0 0 0 1.5rem',
  },
} );

export default BeakerLink;
