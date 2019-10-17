import actions from '../../client/utils/actionTypes';
import fetchResults  from '../../client/actions/fetchResults';
import { sampleResultsRequestObject } from '../utils/testConstants';
describe('fetch results action', function() {
    it('should return FETCH_RESULTS', function() {
        expect(fetchResults(sampleResultsRequestObject,225)).toEqual({
            type: actions.FETCH_RESULTS,
            payload: {requestObject: sampleResultsRequestObject, timeTaken: 225}
        });
    });
});
