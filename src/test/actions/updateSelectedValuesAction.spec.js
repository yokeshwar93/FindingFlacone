import actions from '../../client/utils/actionTypes';
import updateSelectedValuesAction  from '../../client/actions/updateSelectedValuesAction';
import { sampleSelectedValuesObject } from '../utils/testConstants';

describe('update the selected values action', function() {
    it('should return UPDATE_SELECTED_VALUES', function() {
        expect(updateSelectedValuesAction(sampleSelectedValuesObject)).toEqual({
            type: actions.UPDATE_SELECTED_VALUES,
            payload: sampleSelectedValuesObject
        });
    });
});
