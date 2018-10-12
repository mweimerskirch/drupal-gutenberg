/**
 * External dependencies
 */
import { parse, format } from 'url';
import { parse as parseQueryString, stringify } from 'querystring';

/**
 * Appends arguments to the query string of the url
 *
 * @param  {String} url   URL
 * @param  {Object} args  Query Args
 *
 * @return {String}       Updated URL
 */
export function addQueryArgs(url, args) {
  const parsedURL = parse(url, true);
  const query = { ...parsedURL.query, ...args };
  delete parsedURL.search;
  const { Drupal } = window;

  if (parsedURL.path === 'post.php') {
    return '?save=1';
  }

  if (parsedURL.path === 'edit.php' && args.post_type && args.post_type === 'wp_block') {
    return Drupal.url('') + 'admin/content/reusable-blocks';
  }

  return format({ ...parsedURL, query });
}