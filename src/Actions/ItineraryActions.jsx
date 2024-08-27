import {
  ADD_ITINERARY,
  GET_ITINERARY_DETAILS,
} from "../ActionTypes/ItineraryActionTypes";

export const getItinerary = (params) => ({
  type: GET_ITINERARY_DETAILS,
  payload: params,
});
export const addItinerary = (params) => ({
  type: ADD_ITINERARY,
  payload: params,
});
