<?php

namespace Drupal\gutenberg;

/**
 * Class ScanDir.
 */
class ScanDir {

  /**
   * The scanned directories.
   *
   * @var array
   */
  static private $directories;

  /**
   * The list of files.
   *
   * @var array
   */
  static private $files;

  /**
   * Whether a filter was included on file extensions.
   *
   * @var bool|array
   */
  static private $extFilter;

  /**
   * Whether recursive mode is enabled.
   *
   * @var bool
   */
  static private $recursive;

  /**
   * Scans directories.
   */
  public static function scan() {
    // Initialize defaults.
    self::$recursive = FALSE;
    self::$directories = [];
    self::$files = [];
    self::$extFilter = FALSE;

    // Check we have minimum parameters.
    if (!$args = func_get_args()) {
      die("Must provide a path string or array of path strings");
    }
    if (gettype($args[0]) != "string" && gettype($args[0]) != "array") {
      die("Must provide a path string or array of path strings");
    }

    // Check if recursive scan | default action: no sub-directories.
    if (isset($args[2]) && $args[2] == TRUE) {
      self::$recursive = TRUE;
    }

    // Was a filter on file extensions included? | default action: return all
    // file types.
    if (isset($args[1])) {
      if (gettype($args[1]) == "array") {
        self::$extFilter = array_map('strtolower', $args[1]);
      }
      elseif (gettype($args[1]) == "string") {
        self::$extFilter[] = strtolower($args[1]);
      }
    }

    // Grab path(s)
    self::verifyPaths($args[0]);
    return array_map(
      function ($entry) {
        return substr($entry, 3, strlen($entry) - 1);
      },
      self::$files
    );
  }

  /**
   * Verifies paths.
   */
  private static function verifyPaths($paths) {
    $path_errors = [];
    if (gettype($paths) == "string") {
      $paths = [$paths];
    }

    foreach ($paths as $path) {
      if (is_dir($path)) {
        self::$directories[] = $path;
        $dirContents = self::findContents($path);
      }
      else {
        $path_errors[] = $path;
      }
    }

    if ($path_errors) {
      echo "The following directories do not exists<br />";die(var_dump($path_errors));
    }
  }

  /**
   * This is how we scan directories.
   */
  private static function findContents($dir) {
    $result = [];
    $root = scandir($dir);
    foreach ($root as $value) {
      if ($value === '.' || $value === '..') {
        continue;
      }
      if (is_file($dir . DIRECTORY_SEPARATOR . $value)) {
        if (!self::$extFilter || in_array(strtolower(pathinfo($dir . DIRECTORY_SEPARATOR . $value, PATHINFO_EXTENSION)), self::$extFilter)) {
          self::$files[] = $result[] = $dir . DIRECTORY_SEPARATOR . $value;
        }
        continue;
      }
      if (self::$recursive) {
        foreach (self::findContents($dir . DIRECTORY_SEPARATOR . $value) as $value) {
          self::$files[] = $result[] = $value;
        }
      }
    }
    // Return required for recursive search.
    return $result;
  }

}
