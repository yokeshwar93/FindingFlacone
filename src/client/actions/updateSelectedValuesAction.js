
import actions from '../utils/actionTypes';

const updateSelectedValuesAction = requestObject => ({
    type: actions.UPDATE_SELECTED_VALUES,
    payload: requestObject

});

export default updateSelectedValuesAction;
