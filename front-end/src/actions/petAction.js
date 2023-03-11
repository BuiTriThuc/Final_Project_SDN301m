import axios from "axios";
import {
  ALL_PET_FAIL,
  ALL_PET_SUCCESS,
  ALL_PET_REQUEST,
  PET_DETAIL_FAIL,
  PET_DETAIL_REQUEST,
  PET_DETAIL_SUCCESS,
  NEW_PET_FAIL,
  NEW_PET_REQUEST,
  NEW_PET_SUCCESS,
  MY_PET_FAIL,
  MY_PET_REQUEST,
  MY_PET_SUCCESS,
  ADMIN_PET_FAIL,
  ADMIN_PET_REQUEST,
  ADMIN_PET_SUCCESS,
  UPDATE_PET_FAIL,
  UPDATE_PET_REQUEST,
  UPDATE_PET_SUCCESS,
  UPDATE_PET_STATUS_FAIL,
  UPDATE_PET_STATUS_REQUEST,
  UPDATE_PET_STATUS_SUCCESS,
  DELETE_PET_FAIL,
  DELETE_PET_REQUEST,
  DELETE_PET_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/petConstant";

// Get all pets
export const getAllPets = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PET_REQUEST });

    const { data } = await axios.get(`/api/v1/pets`);

    dispatch({
      type: ALL_PET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PET_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Get product details
export const getPetDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PET_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/v1/pet/${id}`);

    dispatch({
      type: PET_DETAIL_SUCCESS,
      payload: data.pet,
    });
  } catch (error) {
    dispatch({
      type: PET_DETAIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get all pets for Admin
export const getAdminPet = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PET_REQUEST });

    const { data } = await axios.get("/api/v1/admin/pets");

    dispatch({
      type: ADMIN_PET_SUCCESS,
      payload: data.pets,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PET_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Create new pet
export const createPet = (petData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PET_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/pet/new`,
      petData,
      config
    );

    dispatch({
      type: NEW_PET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PET_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get my pets
export const myPets = () => async (dispatch) => {
  try {
    dispatch({ type: MY_PET_REQUEST });

    const { data } = await axios.get("/api/v1/pets/me");

    dispatch({ type: MY_PET_SUCCESS, payload: data.pet });
  } catch (error) {
    dispatch({
      type: MY_PET_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update pet
export const updatePetStatusConfirm = (id, petData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PET_STATUS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/pet/update/${id}`,
      petData,
      config
    );

    dispatch({
      type: UPDATE_PET_STATUS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PET_STATUS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update product
export const updatePetAdmin = (id, petData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PET_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/pet/admin/update/${id}`,
      petData,
      config
    );

    dispatch({
      type: UPDATE_PET_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PET_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update product
export const updatePetUser = (id, petData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PET_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/pet/user/update/${id}`,
      petData,
      config
    );

    dispatch({
      type: UPDATE_PET_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PET_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete pet
export const deletePet = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PET_REQUEST });

    const { data } = await axios.delete(`/api/v1/pet/delete/${id}`);

    dispatch({
      type: DELETE_PET_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PET_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
