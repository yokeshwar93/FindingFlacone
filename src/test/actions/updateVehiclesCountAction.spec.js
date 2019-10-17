import actions from '../../client/utils/actionTypes';
import updateVehiclesCountAction  from '../../client/actions/updateVehiclesCountAction';
import { sampleSelectedValuesObject } from '../utils/testConstants';

describe('update the vehciles count based on the selected values action', function() {
    it('should return UPDATE_VEHICLES_COUNT', function() {
        expect(updateVehiclesCountAction(sampleSelectedValuesObject)).toEqual({
            type: actions.UPDATE_VEHICLES_COUNT,
            payload: sampleSelectedValuesObject
        });
    });
});
