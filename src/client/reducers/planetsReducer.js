import actions from '../utils/actionTypes';

const defaultState = {
    planets: undefined,
    errorMsg: '',
};

const planetsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.FETCH_PLANETS_SUCCESS:
            return {...state, planets : action.response}
        case actions.FETCH_PLANETS_FAILURE:
            return {...state, error : action.error}
        default:
            return state;
    }
};

export default planetsReducer;
