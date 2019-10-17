import actions from '../../client/utils/actionTypes';
import resultsReducer from '../../client/reducers/resultsReducer';
import { sampleResultsResponseObject } from '../utils/testConstants';

describe('Results reducer', () => {
    let error = new Error('Error');

    it('should return results on FETCH_RESULTS_SUCCESS', () => {
        expect(
            resultsReducer(
                {},
                {
                    type: actions.FETCH_RESULTS_SUCCESS,
                    response: sampleResultsResponseObject,
                },
            ),
        ).toEqual({
            results: sampleResultsResponseObject,
        });
    });

    it('should return error on FETCH_RESULTS_FAILURE', () => {
        expect(
            resultsReducer(
                {},
                {
                    type: actions.FETCH_RESULTS_FAILURE,
                    error,
                },
            ),
        ).toEqual({
            error: error,
        });
    });

    it('should return empty on NO_ACTION', () => {
        expect(
            resultsReducer(
                {},
                {
                    type: 'NO_ACTION',
                },
            ),
        ).toEqual({});
    });
});
