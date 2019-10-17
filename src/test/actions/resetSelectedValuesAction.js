import actions from '../../client/utils/actionTypes';
import resetSelectedValues  from '../../client/actions/resetSelectedValuesAction';

describe('reset the selected values action', function() {
    it('should return RESET_SELECTED_VALUES', function() {
        expect(resetSelectedValues()).toEqual({
            type: actions.RESET_SELECTED_VALUES,
        });
    });
});
