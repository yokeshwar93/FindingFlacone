import actions from '../utils/actionTypes';

const defaultState = {
    selectedValues: {
    },
};

const selectedValuesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.UPDATE_SELECTED_VALUES:
            return {...state, selectedValues : {...state.selectedValues, ...action.payload}}
        case actions.RESET_SELECTED_VALUES:
            return {...state, selectedValues : {}}

        default:
            return state;
    }
};

export default selectedValuesReducer;
