import { writable } from "svelte/store";

// TODO: add types
const user = writable({
  walletAddress: null,
  walletENSAddress: null,
  provider: null,
  signer: null
});

export { user }