import create from 'zustand';
import { createVotingStore } from './voting.store';

const useStore = create((set, get) => ({
  ...createVotingStore(set, get)
}));

export default useStore;
