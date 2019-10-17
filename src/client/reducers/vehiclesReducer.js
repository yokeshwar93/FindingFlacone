import actions from '../utils/actionTypes';

const defaultState = {
    vehicles: undefined,
    errorMsg: '',
};

const vehiclesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.FETCH_VEHICLES_SUCCESS:
            return {...state, vehicles : action.response}
        case actions.UPDATE_VEHICLES_COUNT:
            return {...state, vehicles: action.payload}
        case actions.FETCH_VEHICLES_FAILURE:
            return {...state, error : action.error}
        default:
            return state;
    }
};

export default vehiclesReducer;
