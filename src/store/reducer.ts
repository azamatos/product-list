// third-party
import { combineReducers } from "redux";

// project imports
import products from "./slices/products";


// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  products: products,
});

export default reducer;
