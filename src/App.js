import React from 'react';
import { Route } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import 'normalize.css';

import typography from './typography';
import Header from './Header';
import BeakerLink from './BeakerLink';
import CaseBlock from './CaseBlock';
import mobileDots from './img/mobile-dots.svg';
import redPhone from './img/red-mobile.svg';

let styles;

const headerLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Cases', to: '/cases' },
  { label: 'lab', to: '/lab' },
  { label: 'Contact', to: '/contact' },
];

const App = () => (
  <div>
    <Header
      links={ headerLinks }
    />
    <div className={ css( styles.content ) }>
      <div className={ css( styles.contentBlock ) }>
        <div className={ css( styles.innerContentBlock ) }>
          <div className={ css( styles.introContainer ) }>
            <div className={ css( styles.introText ) }>
              <h1 className={ css( typography.HEADER_1 ) }>Digital product consultancy</h1>
              <p className={ css( typography.CONTENT ) }>
                We help companies, big and small, create delightful experience for their customers. We also cook up some products of our own in our Lab.
              </p>
              <BeakerLink to="/cases" label="View cases" />
              <BeakerLink to="/lab" label="Our lab" />
              <BeakerLink to="/services" label="Our services" />
            </div>
            <img
              src={ mobileDots }
              className={ css( styles.introImg ) }
              alt="presenation"
            />
          </div>
        </div>
      </div>
      <div className={ css( styles.contentBlock ) }>
        <div className={ css( styles.innerContentBlock ) }>
          <CaseBlock
            caseUrl="/cases/learnifier"
            caseName="Learnifier"
            imgSrc={ redPhone }
            heading="Heading"
            content="Content"
          />
        </div>
      </div>
    </div>
  </div>
);

styles = StyleSheet.create( {
  content: {
  },

  contentBlock: {
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #D6D6D6',
    width: '100%',
  },

  innerContentBlock: {
    maxWidth: 768,
    width: '100%',
  },

  introContainer: {
    display: 'flex',
    margin: '2rem 0',
  },

  introText: {
    flex: 1,
    marginRight: '10rem',
  },

  introImg: {
    marginTop: '4rem',
  },

} );

export default App;
