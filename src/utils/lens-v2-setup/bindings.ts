import { IBindings } from '@lens-protocol/react';
import { Wallet, providers } from 'ethers';

export const bindings = (): IBindings => {
  const provider = new providers.InfuraProvider('maticmum');
  const wallet = new Wallet(
    '6c434da5e5c0e3a8e0db5cf835d23e04c7592037854f0700c26836be7581c68c',
    provider,
  );

  return {
    getProvider: async () => provider,
    getSigner: async () => wallet,
  };
};
