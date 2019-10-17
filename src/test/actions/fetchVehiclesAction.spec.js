import actions from '../../client/utils/actionTypes';
import fetchVehiclesAction  from '../../client/actions/fetchVehiclesAction';

describe('fetch vehicles details action', function() {
    it('should return FETCH_VEHICLES)', function() {
        expect(fetchVehiclesAction()).toEqual({
            type: actions.FETCH_VEHICLES,
        });
    });
});
