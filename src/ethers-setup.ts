import 'react-native-get-random-values';
import '@ethersproject/shims';

if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}
