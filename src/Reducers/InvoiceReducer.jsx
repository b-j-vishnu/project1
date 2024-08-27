import * as InvoiceTypes from "../ActionTypes/InvoiceActionTypes";

const initialState = {
  InvoiceInformation: [],
};

export const InvoiceReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case InvoiceTypes.GET_INVOICE_DETAILS:
      return {
        ...state,
        InvoiceInformation: action.payload,
      };

    default:
      return state;
  }
};
