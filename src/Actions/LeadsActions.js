import { GET_LEADS } from '../ActionTypes/LeadsActionTypes';
import { ADD_LEADS } from '../ActionTypes/LeadsActionTypes'

export const getLeads = (params) => ({
    type: GET_LEADS,
    payload: params
})

export const addLead = (params) => ({
    type: ADD_LEADS,
    payload: params
})