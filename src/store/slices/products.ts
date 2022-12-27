// third-party
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types

// project imports
import { dispatch } from "../index";

// we know that there is only 20 products 
const initialState: ProductSlice = {
  products: [] as Product[],
  bucketProducts: Array(20).fill(0),
  favouriteProducts: Array(20).fill(false),
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },

    addBucketProduct(
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) {
      state.bucketProducts[action.payload.id] = action.payload.count;
    },

    removeBucketProduct(state, action: PayloadAction<{ id: number }>) {
      state.bucketProducts[action.payload.id] = 0;
    },

    addFavouriteProduct(
      state,
      action: PayloadAction<{ id: number; value: boolean }>
    ) {
      state.favouriteProducts[action.payload.id] = action.payload.value;
    },

    removeFavouriteProduct(state, action: PayloadAction<{ id: number }>) {
      state.favouriteProducts[action.payload.id] = false;
    },
  },
});

export default slice.reducer;

// functions
export function setProducts(products: Product[]) {
  return () => {
    dispatch(slice.actions.setProducts(products));
  };
}

export function addBucketProduct(data: { id: number; count: number }) {
  return () => {
    dispatch(slice.actions.addBucketProduct(data));
  };
}

export function addFavouriteProduct(data: { id: number; value: boolean }) {
  return () => {
    dispatch(slice.actions.addFavouriteProduct(data));
  };
}

export function removeFavouriteProduct(data: { id: number }) {
  return () => {
    dispatch(slice.actions.removeFavouriteProduct(data));
  };
}

export function removeBucketProduct(data: { id: number }) {
  return () => {
    dispatch(slice.actions.removeBucketProduct(data));
  };
}
