<?php

/**
 * @file
 * Gets Gutenberg dependencies.
 */

use Symfony\Component\Yaml\Yaml;
use Drupal\gutenberg\ScanDir;

if (PHP_SAPI !== 'cli') {
  return;
}

/**
 * Gets the root dir.
 *
 * @return string
 *   The root dir.
 */
// phpcs:ignore
function getRootDir() {
  $dirs = explode(DIRECTORY_SEPARATOR, __DIR__);

  $root_dir = [];
  foreach ($dirs as $key => $value) {
    if ($value === 'modules') {
      return implode(DIRECTORY_SEPARATOR, $root_dir);
    }
    $root_dir[] = $value;
  }
}

$autoloader = require_once getRootDir() . '/autoload.php';
// Could require bootstrap but maybe it's a "overkill"...?
require_once '../src/ScanDir.php';

$yaml = Yaml::parse(file_get_contents('../gutenberg.libraries.yml'));
$files = scandir('../vendor/gutenberg');
$total = count($files);

$packages = [];

foreach ($files as $file) {
  if (substr($file, 0, 1) !== '.' && $file !== NULL) {
    $packages[] = $file;
  }
}

foreach ($packages as $package) {
  unset($yaml[$package]);

  $package_settings = include_once '../vendor/gutenberg/' . $package . '/index.asset.php';
  $deps = $package_settings['dependencies'];
  $version = $package_settings['version'];

  $jsFiles = ScanDir::scan('../vendor/gutenberg/' . $package, 'js');
  $cssFiles = ScanDir::scan('../vendor/gutenberg/' . $package, 'css');

  $yaml[$package] = [];
  // $yaml[$package]['version'] = "\'{$version}\'";
  $yaml[$package]['js'] = [];
  foreach ($jsFiles as $file) {
    $yaml[$package]['js'][$file] = [];
  }

  $yaml[$package]['css'] = ['theme' => []];
  foreach ($cssFiles as $file) {
    if (!strpos($file, '-rtl')) {
      $yaml[$package]['css']['theme'][$file] = [];
    }
  }

  foreach ($deps as $dep) {
    $dep = str_replace('wp-', '', $dep);
    $yaml[$package]['dependencies'][] = 'gutenberg/' . $dep;
  }
}

// Customize i18n package sources.
if (isset($yaml['i18n'])) {
  $yaml['i18n']['js'] = [
    'js/i18n.js' => [],
    'js/drupal-gutenberg-translations.js' => [],
  ];

  $yaml['i18n']['dependencies'][] = 'gutenberg/sprintf';

}

file_put_contents('../gutenberg.libraries.yml', Yaml::dump($yaml, 4, 2, FALSE, TRUE));
