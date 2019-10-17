import actions from '../../client/utils/actionTypes';
import selectedValuesReducer from '../../client/reducers/selectedValuesReducer';
import { sampleSelectedValuesObject } from '../utils/testConstants';

describe('Update Selected Values reducer', () => {
    let error = new Error('Error');

    it('should update the selected values on UPDATE_SELECTED_VALUES', () => {
        expect(
            selectedValuesReducer(
                {},
                {
                    type: actions.UPDATE_SELECTED_VALUES,
                    payload: sampleSelectedValuesObject,
                },
            ),
        ).toEqual({
            selectedValues: sampleSelectedValuesObject,
        });
    });


    it('should return empty on NO_ACTION', () => {
        expect(
            selectedValuesReducer(
                {},
                {
                    type: 'NO_ACTION',
                },
            ),
        ).toEqual({});
    });
});
