import './ethers-setup';

import React from 'react';

import { Text } from 'react-native';
import { bindings, mmkvStorageProvider } from './utils';
import { LensConfig, development } from '@lens-protocol/react';

const lensConfig: LensConfig = {
  bindings: bindings(),
  environment: development, // Uncomment this line to show issue - build freezes, never loads, phone heats
  storage: mmkvStorageProvider(),
} as any;

function App(): JSX.Element {
  console.log('loads?');
  return <Text>Loads</Text>;
}

export default App;
