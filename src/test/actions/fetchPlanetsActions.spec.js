import actions from '../../client/utils/actionTypes';
import fetchPlanetsActions  from '../../client/actions/fetchPlanetsActions';

describe('fetch planets details action', function() {
    it('should return FETCH_PLANETS', function() {
        expect(fetchPlanetsActions()).toEqual({
            type: actions.FETCH_PLANETS,
        });
    });
});
