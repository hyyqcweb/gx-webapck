import { connect } from 'dva';
import React from 'react';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { ANT_LANGPACKAGE, LANGPACKAGE } from './locales';


const Intl = ({ children, app }) => {
  const { i18n } = app;
  return (
    <LocaleProvider locale={ANT_LANGPACKAGE[i18n]}>
      <IntlProvider
        locale={i18n}
        messages={LANGPACKAGE[i18n]}
      >
        { children }
      </IntlProvider>
    </LocaleProvider>
  );
};

Intl.propTypes = {
  app: PropTypes.object,
  children: PropTypes.object,
};

export default connect(({ app }) => ({ app }))(Intl);
