# Change Log

All notable changes to this project will be documented in this file.

## Unreleased Changes

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
