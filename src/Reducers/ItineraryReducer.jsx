import * as ItineraryTypes from "../ActionTypes/ItineraryActionTypes";

const initialState = {
  ItineraryInformation: [],
};

export const ItineraryReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ItineraryTypes.GET_ITINERARY_DETAILS:
      return {
        ...state,
        ItineraryInformation: action.payload,
      };
    case ItineraryTypes.ADD_ITINERARY:
      return {
        ...state,
        ItineraryInformation: [...state.ItineraryInformation, action.payload],
      };

    default:
      return state;
  }
};
