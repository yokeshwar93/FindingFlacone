import getTotalTime, { getInitialVehiclesList } from '../../client/utils/helper';
import { sampleSelectedValuesObject, sampleVehiclesObject } from "./testConstants";

describe('getTotalTime', function() {
    it('should return the total time taken based on the selected values', function() {
        expect(getTotalTime(sampleSelectedValuesObject)).toEqual(
           225);
    });
});

describe('getInitialVehiclesList', function() {
    it('should return the initial vehicles list', function() {
        expect(getInitialVehiclesList(sampleVehiclesObject)).toEqual(
            sampleVehiclesObject);
    });
});
