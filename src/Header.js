import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

let styles;

const Header = ( { links } ) => (
  <div className={ css( styles.container ) }>
    <div className={ css( styles.linkContainer ) }>
      {
        links.map( ( { label, to } ) => (
          <Link
            key={ to }
            to={ to }
            className={ css( styles.link ) }
          >
            { label }
          </Link>
        ) )
      }
    </div>
  </div>
);

Header.propTypes = {
  links: PropTypes.arrayOf( PropTypes.shape( {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  } ) ).isRequired,
};

Header.defaultProps = {

};

styles = StyleSheet.create( {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem',
    borderBottom: '1px solid #D6D6D6',
  },

  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },

  link: {
    fontFamily: 'Source Sans Pro',
    fontSize: '1.4rem',
    fontWeight: 'normal',
    color: '#6E6E6E',
    margin: '0 2rem',
    textDecoration: 'none',
  },

} );

export default Header;
