import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import pure from 'recompose/pure';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';

import enMessages from './translations/en.json';

addLocaleData( en );
addLocaleData( sv );

const translations = {
  en: enMessages,
};

class ConnectedIntlProvider extends Component {

  static propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  state = {}

  render() {
    const { locale, children } = this.props;
    const messages = translations[ locale ];
    return (
      <IntlProvider
        key={ locale }
        locale={ locale }
        messages={ messages }
      >
        { children }
      </IntlProvider>
    );
  }

}

function mapStateToProps( state ) {
  return {
    locale: state.global.locale,
  };
}

export default connect( mapStateToProps )( pure( ConnectedIntlProvider ) );
