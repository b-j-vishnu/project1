import * as LeadsTypes from '../ActionTypes/LeadsActionTypes'



const initialState = {
    LeadsInformation: [
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: 9022010183,
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Converted to Deal",
            textColor: "00AC4F",
        },
        {
            firstName: "Ham Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: "9022010183",
            userId: "#92",
            executive: "Thilak",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Converted To Deal",
            textColor: "00AC4F",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: "9022010183",
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Cancelled",
            textColor: "FF0202",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: "9022010183",
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Active",
            textColor: "0079FF",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: " 9022010183",
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Meeting Fixed",
            textColor: "FF00C8",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: "9022010183",
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Converted to Deal",
            textColor: "00AC4F",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: "9022010183",
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Proposal Sent",
            textColor: "FF6200",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: 9022010183,
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Closed",
            textColor: "0E2238",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: 9022010183,
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Converted to Deal",
            textColor: "00AC4F",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: 9022010183,
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Converted to Deal",
            textColor: "00AC4F",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: 9022010183,
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Converted to Deal",
            textColor: "00AC4F",
        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: 9022010183,
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Converted to Deal",
            textColor: "00AC4F",

        },
        {
            firstName: "Hakeem Chan",
            email: "augue@natoquepenatibuset.ca",
            mobileNumber: 9022010183,
            userId: "#9265",
            executive: "Sowmiya",
            package: "Domestic",
            enquiryType: "Flight Booking",
            dealStage: "Converted to Deal",
            textColor: "00AC4F",

        },
    ]

}

export const LeadsReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case LeadsTypes.GET_LEADS: return {
            ...state,
            LeadsInformation: action.payload

        }
        case LeadsTypes.ADD_LEADS: return {
            ...state,
            LeadsInformation: [...state.LeadsInformation, action.payload]
        }


        default: return state
    }
}