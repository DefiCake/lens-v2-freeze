/**
 * @description This is a speed up patch for crypto utilities
 */

// react-native-quick-crypto will be used for the react-native app
try {
  exports = require('react-native-quick-crypto');
} catch (err) {
  // for anything else (ie. tests), javascript implementation will be used

  exports = require('crypto-browserify');
}
