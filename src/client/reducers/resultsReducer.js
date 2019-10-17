import actions from '../utils/actionTypes';

const defaultState = {
    results: undefined,
    errorMsg: '',
};

const resultsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.FETCH_RESULTS_SUCCESS:
            return {...state, results : action.response}
        case actions.FETCH_RESULTS_FAILURE:
            return {...state, error : action.error}
        default:
            return state;
    }
};

export default resultsReducer;
