import { configureStore } from "@reduxjs/toolkit";
import { LeadsReducer } from "../Reducers/LeadsReducer";
import { ItineraryReducer } from "../Reducers/ItineraryReducer";
import { InvoiceReducer } from "../Reducers/InvoiceReducer";


export default configureStore({
    reducer: {
        leads: LeadsReducer,
        Itinerary: ItineraryReducer,
        Invoice: InvoiceReducer
    },
});
