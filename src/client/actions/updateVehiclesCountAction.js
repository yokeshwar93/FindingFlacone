
import actions from '../utils/actionTypes';

const updateVehiclesCountAction = requestObject => ({
    type: actions.UPDATE_VEHICLES_COUNT,
    payload: requestObject

});

export default updateVehiclesCountAction;
