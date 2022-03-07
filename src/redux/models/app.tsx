/**
 * Each module state should be handled separately
 */

export default {
  name: "app",
  initialState: {
    value: 0,
    loading: 0,
  },
  reducers: {
    setState: (state: any, acton: any) => {
      Object.entries(acton.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    setLoading: (state: any, acton: any) => {
      state.loading = acton.payload;
    },
  },
};
