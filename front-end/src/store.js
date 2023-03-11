import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
  productRandomReducer,
  newReviewReducer,
  newProductReducer,
  productReducer,
  productReviewsReducer,
  reviewReducer,
} from "./reducers/productReducer";
import {
  profileReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  newOrderReducer,
  myOrderReducer,
  orderDetailsReducer,
  allOrdersReducer,
  orderReducer,
} from "./reducers/orderReducer";

import { petsReducer, petDetailsReducer, newPetReducer, myPetReducer, petReducer } from "./reducers/petReducer";

const reducer = combineReducers({
  products: productsReducer,
  productsRandom: productRandomReducer,
  productDetails: productDetailsReducer,
  newReview: newReviewReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrderReducer,
  orderDetails: orderDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  pets: petsReducer,
  petDetails: petDetailsReducer,
  newPet: newPetReducer,
  myPets: myPetReducer,
  pet: petReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middeware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middeware))
);

export default store;
