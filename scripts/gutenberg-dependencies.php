<?php

use Symfony\Component\Yaml\Yaml;
use Drupal\gutenberg\ScanDir;

if (PHP_SAPI !== 'cli') {
  return;
}

/**
 * 
 */
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
  if (substr( $file, 0, 1 ) !== '.' && $file !== NULL) {
    $packages[] = $file;
  }
}

foreach ($packages as $package) {
  unset($yaml[$package]);

  $deps = include('../vendor/gutenberg/' . $package . '/index.asset.php');
  $deps = $deps['dependencies'];
  // $deps = file_get_contents('../vendor/gutenberg/' . $package . '/index.deps.json');
  // if (!empty($deps)) {
  //   $deps = json_decode($deps);
  // }

  $jsFiles = ScanDir::scan('../vendor/gutenberg/' . $package, 'js');
  $cssFiles = ScanDir::scan('../vendor/gutenberg/' . $package, 'css');

  $yaml[$package] = [];
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

// echo Yaml::dump($yaml, 4, 2, false, true);

file_put_contents('../gutenberg.libraries.yml', Yaml::dump($yaml, 4, 2, false, true));
