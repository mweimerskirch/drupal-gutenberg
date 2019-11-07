((Drupal, wp) => {
  const translate = value => Drupal.t(value);
  wp.i18n = {};
  wp.i18n.__ = translate;
  wp.i18n._x = translate;
  wp.i18n._n = (single, plural, number) =>
    Drupal.formatPlural(number, single, plural);
  wp.i18n.sprintf = translate;
})(Drupal, wp);
