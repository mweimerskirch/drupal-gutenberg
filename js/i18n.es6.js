((Drupal, wp, sprintf) => {
  // see https://github.com/WordPress/gutenberg/blob/master/packages/i18n/src/index.js
  wp.i18n = {};

  wp.i18n.__ = value => Drupal.t(value);
  wp.i18n._x = (value, context) => Drupal.t(value, {}, { context });
  wp.i18n._n = (single, plural, number) => {
    // TODO: Investigate some situations where number returns undefined
    try {
      return sprintf(Drupal.formatPlural(number, single, plural), number);
    } catch (error) {
      console.warn(error);
    }
  }
  wp.i18n._nx = (single, plural, number, context) => {
    // TODO: Investigate some situations where number returns undefined
    try {
      return sprintf(
        Drupal.formatPlural(number, single, plural, {}, { context }),
        number,
      );
    } catch (error) {
      console.warn(error);
    }
  }

  wp.i18n.isRTL = () =>
    Drupal.t('ltr', {}, { context: 'text direction' }) === 'rtl';
  wp.i18n.setLocaleData = () => {
    // eslint-disable-next-line no-console
    console.warn('wp.i18n.setLocaleData() is a noop.');
  };
  wp.i18n.sprintf = (format, ...args) => {
    try {
      return sprintf(format, ...args);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(`sprintf error: \n\n${error.toString()}`);

      return format;
    }
  };
})(Drupal, wp, sprintf);
