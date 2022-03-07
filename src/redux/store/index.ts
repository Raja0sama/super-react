import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const models = {
  app: require("../models/app").default,
};

const getAllSlices = () => {
  const slices = Object.entries(models).reduce((acc: any, curr: any) => {
    const [key, model] = curr;
    const slice = createSlice(model);
    acc[`${key}`] = slice;
    return acc;
  }, {});

  return slices;
};

const init = () => {
  const slices = getAllSlices();
  const { r, a } = Object.entries(slices).reduce(
    (acc: any, curr: any) => {
      const [key, slice] = curr;
      acc.r[`${key}`] = slice.reducer;
      acc.a[`${key}`] = slice.actions;
      return acc;
    },
    { r: {}, a: {} }
  );

  return {
    store: configureStore({ reducer: r }),
    actions: a,
  };
};

const { store, actions } = init();
export default store;
export { actions };
