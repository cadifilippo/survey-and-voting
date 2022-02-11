import create from 'zustand';
import { persist } from 'zustand/middleware';
import { createVotingPersist } from './voting.persist';

const usePersist = create(
  persist((set, get) => ({
    ...createVotingPersist(set, get)
  })),
  {
    name: 'survoty-storage',
    getStorage: () => localStorage
  }
);

export default usePersist;
