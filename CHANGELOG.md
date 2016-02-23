# Change Log

All notable changes to this project will be documented in this file.

## Unreleased Changes

## 0.1.1 - 2016-02-23
### Fixed
- add offsetHeight hit to pop layout refreshes on class changes, so the
  setup phase can avoid merging css changes that shouldn't occur, such
  as a layout class then also animating

## 0.1.0 - 2015-12-09
### Changed
- fallback mode now runs by default if browser is not capable of request
  animation frame or css transitions

## 0.0.6 - 2014-12-02
### Changed
- inverted environment tests to !== "production", so browserify users will get
  the non minified version by the default

## 0.0.5 - 2014-11-17
### Changed
- debugMode and fallbackMode warning provided if attempting to use in
  minified build

## 0.0.4 - 2014-11-17
### Fixed
- removed shadowing of process variable in doTransition, fixed for real on
  browserify when developing unminified.

## 0.0.3 - 2014-11-16
### Fixed
- still incorrectly configured entry point for browserify (it's amateur hour)

## 0.0.2 - 2014-11-16
### Fixed
- incorrectly configured entry point for using browserify

## 0.0.1 - 2014-11-16
### Added
- added support for objects as steps
- doTransition method added
- debugMode and fallbackMode added
