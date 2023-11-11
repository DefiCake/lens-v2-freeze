/**
 * @description This is a speed up patch for crypto utilities
 */
try {
  const pbkdf2 = require('react-native-quick-crypto').pbkdf2Sync;

  exports.pbkdf2 = pbkdf2;
} catch (err) {
  console.error('Could not import react-native-quick-crypto.pbkdf2Sync');
  exports.pbkdf2 = require('crypto').pbkdf2Sync;
}
