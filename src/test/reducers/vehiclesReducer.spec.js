import actions from '../../client/utils/actionTypes';
import vehiclesReducer from '../../client/reducers/vehiclesReducer';
import {sampleVehiclesObject} from '../utils/testConstants';


describe('Vehicles reducer', () => {
    let error = new Error('Error');



    it('should return vehicles list on FETCH_VEHICLES_SUCCESS', () => {
        expect(
            vehiclesReducer(
                {},
                {
                    type: actions.FETCH_VEHICLES_SUCCESS,
                    response: sampleVehiclesObject,
                },
            ),
        ).toEqual({
            vehicles: sampleVehiclesObject,
        });
    });

    it('should return error on FETCH_VEHICLES_FAILURE', () => {
        expect(
            vehiclesReducer(
                {},
                {
                    type: actions.FETCH_VEHICLES_FAILURE,
                    error,
                },
            ),
        ).toEqual({
            error: error,
        });
    });
    it('should update the vehicle count based on the selected values on UPDATE_VEHICLES_COUNT', () => {
        expect(
            vehiclesReducer(
                {},
                {
                    type: actions.UPDATE_VEHICLES_COUNT,
                    payload: sampleVehiclesObject,
                },
            ),
        ).toEqual({
            vehicles: sampleVehiclesObject,
        });
    });


    it('should return empty on NO_ACTION', () => {
        expect(
            vehiclesReducer(
                {},
                {
                    type: 'NO_ACTION',
                },
            ),
        ).toEqual({});
    });
});
