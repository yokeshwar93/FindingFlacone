import actions from '../../client/utils/actionTypes';
import planetsReducer from '../../client/reducers/planetsReducer';
import { samplePlanetsObject } from '../utils/testConstants';

describe('Planets reducer', () => {
    let error = new Error('Error');

    it('should return planets list on FETCH_PLANETS_SUCCESS', () => {
        expect(
            planetsReducer(
                {},
                {
                    type: actions.FETCH_PLANETS_SUCCESS,
                    response: samplePlanetsObject,
                },
            ),
        ).toEqual({
            planets: samplePlanetsObject,
        });
    });

    it('should return error on FETCH_PLANETS_FAILURE', () => {
        expect(
            planetsReducer(
                {},
                {
                    type: actions.FETCH_PLANETS_FAILURE,
                    error,
                },
            ),
        ).toEqual({
            error: error,
        });
    });

    it('should return empty on NO_ACTION', () => {
        expect(
            planetsReducer(
                {},
                {
                    type: 'NO_ACTION',
                },
            ),
        ).toEqual({});
    });
});
