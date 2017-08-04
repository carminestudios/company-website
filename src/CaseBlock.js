import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

import typography from './typography';

let styles;

const CaseBlock = ( { imgSrc, caseName, caseUrl, caseColorStyle, heading, content } ) => (
  <div className={ css( styles.container ) }>
    <div className={ css( styles.imageContainer ) } style={ { backgroundImage: `url(${ imgSrc })` } } />
    <div className={ css( styles.contentContainer ) }>
      <Link to={ caseUrl } className={ css( styles.caseLink, caseColorStyle ) }>Cases / { caseName }</Link>
      <h1 className={ css( typography.HEADER_1 ) }>{ heading }</h1>
      <div className={ css( typography.CONTENT ) }>
        {
          content
        }
      </div>
    </div>
  </div>
);

CaseBlock.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  caseName: PropTypes.string.isRequired,
  caseUrl: PropTypes.string.isRequired,
  caseColorStyle: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.oneOfType( [ PropTypes.node, PropTypes.string ] ).isRequired,
};

CaseBlock.defaultProps = {

};

styles = StyleSheet.create( {
  container: {
    display: 'flex',
    minHeight: '45rem',
  },

  imageContainer: {
    flex: 1,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left',
  },

  contentContainer: {
    flex: 1,
    padding: '5rem 0 5rem 5rem',
  },
} );

export default CaseBlock;
