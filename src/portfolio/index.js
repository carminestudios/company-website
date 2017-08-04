import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {};

class ProtectedPortfolio extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  state = {}

  componentDidMount() {
    if ( process.env.NODE_ENV === 'production' ) {
      debugger;
    }
    import( /* webpackChunkName: "protected-portfolio.js" */ './ProjectList' )
      .then( ( result ) => {
        console.log( result );
        debugger;
      } )
      .catch( ( reason ) => { console.error( reason ); debugger; } );
      //.then( ( { default: ProjectList } ) => this.setState( { ProjectList } ) );
  }

  render() {
    const { ProjectList } = this.state;
    return (
      <div style={ styles.container }>
        Protected Portfolio
        {
          ProjectList ? (
            <ProjectList />
          ) : null
        }
      </div>
    );
  }

}

Object.assign( styles, {
  container: {

  },
} );

export default ProtectedPortfolio;
