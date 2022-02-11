export const createVotingStore = (set, get) => ({
  count: 0,
  user: {},
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set(() => ({ count: get().count - 1 })),
  resetCount: () => set(() => ({ count: 0 })),
  setUser: (user) => set(() => ({ user })),
  action: () => {
    const user = get((state) => state.user);
    // ....
    console.log(user);
  }
});
