import { put, call } from 'redux-saga/effects';
import actions from '../utils/actionTypes';
import { serviceUrls } from '../utils/constants';

export default function* fetchVehiclesSaga(action) {

    try {
        const api = serviceUrls.fetchVehiclesAPI;
        let response = yield call(fetch, api, {}, 'GET');
        yield response = response.json().then(data => response = data)
        const vehiclesList = [] ;
        response.map((vehicle,index) => {
            vehicle.availableCount = vehicle.total_no;
            vehicle.id = `vehicle_${index}`
            vehiclesList.push(vehicle)
        })
        yield put({
            type: actions.FETCH_VEHICLES_SUCCESS,
            response: vehiclesList,
        });
    } catch (error) {
        yield put({
            type: actions.FETCH_VEHICLES_FAILURE,
            error,
        });
    }
}
