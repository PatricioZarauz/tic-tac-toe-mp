'use client';

import { IntlProvider } from 'react-intl';

const Providers = ({ messages, locale, children }) => {
  return (
    <IntlProvider messages={messages} locale={locale} >
      {children}
    </IntlProvider>
  );
};

export default Providers;