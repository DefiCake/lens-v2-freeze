/**
 * @format
 */

const crypto = require('crypto');
const quickCrypto = require('react-native-quick-crypto');

crypto.publicEncrypt = quickCrypto.publicEncrypt;
crypto.privateDecrypt = quickCrypto.privateDecrypt;
crypto.generateKeyPair = quickCrypto.generateKeyPair;
crypto.createVerify = quickCrypto.createVerify;
crypto.createSign = quickCrypto.createSign;
crypto.createHash = quickCrypto.createHash;
crypto.createCipheriv = quickCrypto.createCipheriv;
crypto.createHmac = quickCrypto.createHmac;
crypto.getRandomValues = quickCrypto.getRandomValues;

import { Buffer } from 'buffer';
global.Buffer = Buffer;
global.process.cwd = () => 'sxsx';
global.process.env = { NODE_ENV: 'production' };
global.crypto = crypto;
global.location = {};

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
