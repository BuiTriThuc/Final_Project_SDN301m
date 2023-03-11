import {
  ALL_PET_FAIL,
  ALL_PET_SUCCESS,
  ALL_PET_REQUEST,
  PET_DETAIL_FAIL,
  PET_DETAIL_REQUEST,
  PET_DETAIL_SUCCESS,
  NEW_PET_FAIL,
  NEW_PET_REQUEST,
  NEW_PET_RESET,
  NEW_PET_SUCCESS,
  MY_PET_FAIL,
  MY_PET_REQUEST,
  MY_PET_SUCCESS,
  ADMIN_PET_FAIL,
  ADMIN_PET_REQUEST,
  ADMIN_PET_SUCCESS,
  DELETE_PET_FAIL,
  DELETE_PET_REQUEST,
  DELETE_PET_RESET,
  DELETE_PET_SUCCESS,
  UPDATE_PET_FAIL,
  UPDATE_PET_REQUEST,
  UPDATE_PET_RESET,
  UPDATE_PET_SUCCESS,
  UPDATE_PET_STATUS_FAIL,
  UPDATE_PET_STATUS_REQUEST,
  UPDATE_PET_STATUS_RESET,
  UPDATE_PET_STATUS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/petConstant";

export const petsReducer = (state = { pets: [] }, action) => {
  switch (action.type) {
    case ALL_PET_REQUEST:
    case ADMIN_PET_REQUEST:
      return {
        loading: true,
        pet: [],
      };

    case ALL_PET_SUCCESS:
      return {
        loading: false,
        pets: action.payload.pet,
        petsCount: action.payload.petsCount,
        filteredPetsCount: action.payload.filteredPetsCount,
      };

      case ADMIN_PET_SUCCESS:
      return {
        loading: false,
        pets: action.payload,
      }

    case ALL_PET_FAIL:
    case ADMIN_PET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const petDetailsReducer = (state ={ pet: {} }, action) => {
  switch (action.type) {
    case PET_DETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case PET_DETAIL_SUCCESS:
      return {
        loading: false,
        pet: action.payload,
      };

    case PET_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const newPetReducer = (state = { pet: {} }, action) => {
  switch (action.type) {
    case NEW_PET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_PET_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        pet: action.payload.pet,
      };

    case NEW_PET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case NEW_PET_RESET:
      return {
        ...state,
        success: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const myPetReducer = (state = { pets: [] }, action) => {
  switch (action.type) {
    case MY_PET_REQUEST:
      return {
        loading: true,
      };
    case MY_PET_SUCCESS:
      return {
        loading: false,
        pets: action.payload,
      };
    case MY_PET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const petReducer = (state = { }, action) => {
  switch (action.type) {
    case DELETE_PET_REQUEST:
    case UPDATE_PET_REQUEST:
    case UPDATE_PET_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PET_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PET_SUCCESS:
    case UPDATE_PET_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      }

    case DELETE_PET_FAIL:
    case UPDATE_PET_FAIL:
    case UPDATE_PET_STATUS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_PET_RESET:
      return {
        ...state,
        isDeleted: false,
      };

      case UPDATE_PET_RESET:
      case UPDATE_PET_STATUS_RESET:
        return {
          ...state,
          isUpdated: false,
        };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
