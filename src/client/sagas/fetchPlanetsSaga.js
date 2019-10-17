import { put, call } from 'redux-saga/effects';
import actions from '../utils/actionTypes';
import { serviceUrls } from '../utils/constants';

export default function* fetchPlanetsSaga(action) {

    try {
        const api = serviceUrls.fetchPlanetsAPI;
        let response = yield call(fetch, api, {}, 'GET')

        yield response = response.json().then(data => response = data)
        yield put({
            type: actions.FETCH_PLANETS_SUCCESS,
            response: response,
        });
    } catch (error) {
        yield put({
            type: actions.FETCH_PLANETS_FAILURE,
            error,
        });
    }
}
